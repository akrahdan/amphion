import {  Ros  } from '@robostack/roslib';
import Amphion from '../../build/amphion';
import CONFIG from '../config.json';

// Setup ros instance and viewer
const ros = new Ros();
const viewer = new Amphion.Viewer2d();

viewer.setContainer(document.getElementById('scene'));
ros.connect(CONFIG.ROS_WEBSOCKET_ENDPOINT);

// Add path
const path = new Amphion.Path(ros, '/path_rosbag');
path.subscribe();
viewer.addVisualization(path);

// Add Marker array
const markerArray = new Amphion.MarkerArray(ros, '/markers_demo');
markerArray.subscribe();
viewer.addVisualization(markerArray);

// Add Odometry
const odometry = new Amphion.Odometry(ros, '/odom_rosbag');
odometry.subscribe();
viewer.addVisualization(odometry);
