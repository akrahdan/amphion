import { Color } from 'three';

import {
  DEFAULT_OPTIONS_POLYGON,
} from '../utils/constants';
import Group from '../primitives/Group';
import Line from '../primitives/Line';
import LiveCore from '../core/live';
import { RosTopicDataSource } from '../data/rosTopic';

class Polygon extends LiveCore<RosMessage.PolygonStamped, Group> {
  public readonly object: Group;
  private readonly line: Line;

  constructor(
    source: RosTopicDataSource<RosMessage.PolygonStamped>,
    options = DEFAULT_OPTIONS_POLYGON
  ) {
    super({
      sources: [source],
      options: {
        ...DEFAULT_OPTIONS_POLYGON,
        ...options,
      },
    });
    this.object = new Group();
    this.line = new Line(null, true);
    this.updateOptions({
      ...DEFAULT_OPTIONS_POLYGON,
      ...options,
    });
  }

  updateOptions(options: any) {
    super.updateOptions(options);
    const { alpha, color } = this.options;
    this.line.setColor(new Color(color));
    this.line.setAlpha(alpha);
  }

  update(message: RosMessage.PolygonStamped) {
    super.update(message);
    const {
      polygon: { points },
    } = message;
    points.push(points[0]);
    this.line.updatePoints(points);
    this.object.add(this.line);
  }
}

export default Polygon;
