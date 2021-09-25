import { Ros } from '@robostack/roslib';
import Amphion from '../../build/amphion';
import CONFIG from '../config.json';

// Setup ros instance and viewer
const ros = new Ros();
const scene = new Amphion.Scene();

const viewer3d = new Amphion.Viewer3d(scene);
viewer3d.setContainer(document.getElementById('scene3d'));

const viewer2d = new Amphion.Viewer2d(scene);
viewer2d.setContainer(document.getElementById('scene2d'));

ros.connect(CONFIG.ROS_WEBSOCKET_ENDPOINT);

// Add path
const path = new Amphion.Path(new Amphion.RosTopicDataSource({ros: ros, topicName: '/move_group/display_planned_path'}));
path.subscribe();
scene.addVisualization(path);

// Add Marker
const marker = new Amphion.Marker(new Amphion.RosTopicDataSource({ros: ros, topicName: '/cube_list'}));
marker.subscribe();
scene.addVisualization(marker);

// Add Marker Aray
const markerArray = new Amphion.MarkerArray(new Amphion.RosTopicDataSource({ros: ros, topicName: '/markers_demo'}));

markerArray.subscribe();
scene.addVisualization(markerArray);

// Add Odometry
const odometry = new Amphion.Odometry(new Amphion.RosTopicDataSource({ros: ros, topicName: '/tricycle_drive_controller/odom'}));
odometry.subscribe();
scene.addVisualization(odometry);
