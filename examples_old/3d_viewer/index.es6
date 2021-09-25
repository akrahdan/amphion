import { Ros } from '@robostack/roslib';
import Amphion from '../../build/amphion';
import CONFIG from '../config.json';

// Setup ros instance and viewer
const ros = new Ros();
const viewer = new Amphion.Viewer3d();

viewer.setContainer(document.getElementById('scene'));
ros.connect("ws://localhost:9090");

// Add path
const path = new Amphion.Path(new Amphion.RosTopicDataSource({ros: ros, topicName: '/path_rosbag'}));
path.subscribe();
viewer.addVisualization(path);

// Add Marker
const marker = new Amphion.Marker(new Amphion.RosTopicDataSource({ros: ros, topicName: '/cube_list'}));
marker.subscribe();
viewer.addVisualization(marker);

// Load robot model
const robotModel = new Amphion.RobotModel(ros, 'robot_description', {
  packages: {
    franka_description: 'https://storage.googleapis.com/kompose-artifacts/franka_description',
  }
});
robotModel.loadFromParam();
viewer.addVisualization(robotModel);
