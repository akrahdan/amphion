import { Ros } from '@robostack/roslib';
import Amphion from '../build/amphion.js';
import CONFIG from './config.json';

// Setup ros instance and viewer
const ros = new Ros();
ros.on('connection', () => {
  console.log('Connection made!');
});
const viewer = new Amphion.TfViewer(ros, {
  backgroundColor: 0x000000,
  gridColor: 0x222222,
  gridCenterlineColor: 0x444444,
});

viewer.setContainer(document.getElementById('scene'));
ros.connect(CONFIG.ROS_WEBSOCKET_ENDPOINT);

ros.getTopics((topics) => {
  console.log(topics);
});

// Path
// const pathDataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: '/path_rosbag',
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_PATH
// });
// const path = new Amphion.Path(pathDataSource);
// viewer.addVisualization(path);
// path.subscribe();

// Odometry visualization
// const odomDataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: '/odom_rosbag',
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_ODOMETRY
// });
// const odom = new Amphion.Odometry(odomDataSource);
// viewer.addVisualization(odom);
// odom.subscribe();

// Marker visualization
// const markerTopics = [
  // "/sphere",
  // "/arrow",
  // "/cube",
  // "/points",
  // "/text_view_facing",
  // "/sphere_list",
  // "/cube_list",
  // "/cylinder",
  // "/line_strip",
  // "/line_list",
  // "/triangle_list"
// ];
//
// markerTopics.map(topic => {
//   const dataSource = new Amphion.RosTopicDataSource({
//     ros,
//     topicName: topic,
//     messageType: Amphion.CONSTANTS.MESSAGE_TYPE_MARKER
//   });
//   const viz = new Amphion.Marker(dataSource);
//   viewer.addVisualization(viz);
//   viz.subscribe();
// });

// const sphereListDataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: '/sphere_list',
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_MARKER
// });
// const spheres = new Amphion.Marker(sphereListDataSource);
// viewer.addVisualization(spheres);
// spheres.subscribe();

// Interactive marker
// const intMarker = new Amphion.InteractiveMarkers(
//   ros,
//   '/basic_controls/update_full',
//   viewer,
//   {
//     hideOtherHandlesOnDrag: false,
//     hideOtherControlsInstancesOnDrag: false,
//   }
// );
// viewer.addVisualization(intMarker);
// intMarker.subscribe();

// Marker Array
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/markers_demo",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_MARKERARRAY
// });
// const viz = new Amphion.MarkerArray(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Map
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/occupancy_grid",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_OCCUPANCYGRID
// });
// const viz = new Amphion.Map(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// TF
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/tf",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_TF2
// });
// const viz = new Amphion.Tf(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Laser scan
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/laser_scan",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_LASERSCAN
// });
// const viz = new Amphion.LaserScan(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Polygon
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/polygon_stamped",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_POLYGONSTAMPED
// });
// const viz = new Amphion.Polygon(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Pose
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/pose_stamped",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_POSESTAMPED
// });
// const viz = new Amphion.Pose(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Range
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/range",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_RANGE
// });
// const viz = new Amphion.Range(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Wrench
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/wrench_stamped",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_WRENCHSTAMPED
// });
// const viz = new Amphion.Wrench(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Pointcloud 2
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/pointcloud2_throttled",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_POINTCLOUD2
// });
// const viz = new Amphion.PointCloud(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();


// Point
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/point_stamped",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_POINTSTAMPED
// });
// const viz = new Amphion.Point(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Pose array
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/pose_array_rosbag",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_POSEARRAY
// });
// const viz = new Amphion.PoseArray(dataSource);
// viewer.addVisualization(viz);
// viz.subscribe();

// Image
// const dataSource = new Amphion.RosTopicDataSource({
//   ros,
//   topicName: "/camera/depth/image_raw_throttled",
//   messageType: Amphion.CONSTANTS.MESSAGE_TYPE_IMAGE
// });
// const viz = new Amphion.Image(dataSource);
// viz.object.setAttribute("style", "position: fixed; top: 20px; left: 20px;");
// document.body.appendChild(viz.object);
// viz.subscribe();
