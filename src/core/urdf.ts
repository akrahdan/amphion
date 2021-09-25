import { DefaultLoadingManager, LoadingManager, Object3D } from 'three';
import { assertIsDefined } from '../utils/helpers';
import { Param, Ros } from '@robostack/roslib';
import { DEFAULT_OPTIONS_ROBOTMODEL } from '../utils/constants';
import URDFLoader, { URDFLink, URDFRobot } from 'urdf-loader';

class URDFCore<V extends Object3D> extends URDFLoader {
  private readonly param: Param;
  protected options: { [k: string]: any };
  private urdfObject?: URDFRobot;
  public packages: { [packageName: string]: string } = {};
  public object?: V;

  constructor(
    ros: Ros,
    paramName: string,
    options: any = DEFAULT_OPTIONS_ROBOTMODEL,
  ) {
    super(DefaultLoadingManager);
    this.options = options;
    this.packages = options.packages;
    this.param = new Param({
      ros,
      name: paramName,
    });

    this.updateOptions = this.updateOptions.bind(this);
    this.getPackages = this.getPackages.bind(this);
    this.defaultLoadMeshCallback = this.defaultLoadMeshCallback.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.loadURDF = this.loadURDF.bind(this);
    this.loadFromParam = this.loadFromParam.bind(this);
  }

  onComplete(object: Object3D) {}

  loadFromParam(onComplete = this.onComplete, options = {}) {
    this.param.get(urdfString => {
      this.loadURDF(urdfString, onComplete, options);
    });
  }

  loadURDF(urdfString: string, onComplete = this.onComplete, options: any) {
    this.packages = options.packages || this.packages;
    this.loadMeshCb = options.loadMeshCb || this.defaultLoadMeshCallback;
    this.fetchOptions = { mode: 'cors', credentials: 'same-origin' };
    const urdfObject = super.parse(urdfString);
    assertIsDefined(this.object);
    this.urdfObject = urdfObject;
    this.object.add(urdfObject);
    this.object.name = urdfObject.robotName;

    onComplete(this.object);
  }

  public defaultLoadMeshCallback(
    path: string,
    ext: LoadingManager,
    done: (mesh: Object3D) => void,
  ) {
    this.defaultMeshLoader(path, ext, (mesh: Object3D) => {
      done(mesh);
    });
  }

  getPackages(onComplete: (packages: string[]) => void) {
    this.param.get(robotString => {
      const parser = new DOMParser();
      const urdf = parser.parseFromString(robotString, 'text/xml');
      const packages = [...Array.from(urdf.querySelectorAll('mesh'))].map(
        mesh => {
          const [targetPkg] = (mesh
            ?.getAttribute('filename') || "")
            ?.replace(/^package:\/\//, '')
            .split(/\/(.+)/);
          return targetPkg;
        },
      );
      onComplete([...new Set(packages)]);
    });
  }

  hide = () => {
    assertIsDefined(this.object);
    Object.values(this.urdfObject?.links ?? []).forEach((link: URDFLink) => {
      link.visible = false;
    });
  };

  show = () => {
    assertIsDefined(this.object);
    Object.values(this.urdfObject?.links ?? []).forEach((link: URDFLink) => {
      link.visible = true;
    });
  };

  destroy = () => {
    Object.values(this.urdfObject?.links ?? []).forEach((link: URDFLink) => {
      if(link.parent) {
        link.parent.remove(link);
      }
      if(link.children) {
        link.children.map(child => {
          link.remove(child);
        });
      }
    });
    this.object?.parent?.remove(this.object);
    this.object = undefined;
  };

  reset = () => {};

  updateOptions(options: { [k: string]: any }) {
    this.options = {
      ...this.options,
      ...options,
    };
  }
}

export default URDFCore;
