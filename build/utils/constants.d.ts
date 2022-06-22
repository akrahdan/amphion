import { Group } from 'three';
export declare const OBJECT_TYPE_ARROW = "Arrow";
export declare const OBJECT_TYPE_ARROW_WITH_CIRCLE = "ArrowWithCircle";
export declare const OBJECT_TYPE_AXES = "Axes";
export declare const OBJECT_TYPE_FLAT_ARROW = "FlatArrow";
export declare const MAX_POINTCLOUD_POINTS = 5000000;
export declare const DEFAULT_BACKGROUND_COLOR = 15790320;
export declare const DEFAULT_GRID_SIZE = 30;
export declare const DEFAULT_GRID_DIVISIONS = 30;
export declare const DEFAULT_GRID_COLOR = 11184810;
export declare const DEFAULT_GRID_COLOR_CENTERLINE = 7368816;
export declare const INTERACTIVE_MARKER_ORIENTATION_MODES: {
    INHERIT: number;
    FIXED: number;
    VIEW_FACING: number;
};
export declare const UNSUPPORTED_INTERACTIVE_MARKER_ORIENTATION_MODES: number[];
export declare const INTERACTIVE_MARKER_INTERACTION_MODES: {
    NONE: number;
    MENU: number;
    BUTTON: number;
    MOVE_AXIS: number;
    MOVE_PLANE: number;
    ROTATE_AXIS: number;
    MOVE_ROTATE: number;
    MOVE_3D: number;
    ROTATE_3D: number;
    MOVE_ROTATE_3D: number;
};
export declare const MESSAGE_TYPE_ROBOT_MODEL = "robot_description";
export declare const MESSAGE_TYPE_ACCELSTAMPED = "geometry_msgs/AccelStamped";
export declare const MESSAGE_TYPE_POINTSTAMPED = "geometry_msgs/PointStamped";
export declare const MESSAGE_TYPE_POINTSTAMPED2 = "geometry_msgs/msg/PointStamped";
export declare const MESSAGE_TYPE_POLYGONSTAMPED = "geometry_msgs/PolygonStamped";
export declare const MESSAGE_TYPE_POSEARRAY = "geometry_msgs/PoseArray";
export declare const MESSAGE_TYPE_POSEARRAY2 = "geometry_msgs/msg/PoseArray";
export declare const MESSAGE_TYPE_POSECOVARIANCE = "geometry_msgs/PoseWithCovariance";
export declare const MESSAGE_TYPE_POSECOVARIANCE2 = "geometry_msgs/msg/PoseWithCovariance";
export declare const MESSAGE_TYPE_POSESTAMPED = "geometry_msgs/PoseStamped";
export declare const MESSAGE_TYPE_POSESTAMPED2 = "geometry_msgs/msg/PoseStamped";
export declare const MESSAGE_TYPE_TWISTSTAMPED = "geometry_msgs/TwistStamped";
export declare const MESSAGE_TYPE_VECTOR3STAMPED = "geometry_msgs/Vector3Stamped";
export declare const MESSAGE_TYPE_WRENCHSTAMPED = "geometry_msgs/WrenchStamped";
export declare const MESSAGE_TYPE_WRENCHSTAMPED2 = "geometry_msgs/msg/WrenchStamped";
export declare const MESSAGE_TYPE_BOUNDINGVOLUME = "moveit_msgs/BoundingVolume";
export declare const MESSAGE_TYPE_COLLISION_OBJECT = "moveit_msgs/CollisionObject";
export declare const MESSAGE_TYPE_DISPLAYROBOTSTATE = "moveit_msgs/DisplayRobotState";
export declare const MESSAGE_TYPE_DISPLAYTRAJECTORY = "moveit_msgs/DisplayTrajectory";
export declare const MESSAGE_TYPE_PLANNINGSCENE = "moveit_msgs/PlanningScene";
export declare const MESSAGE_TYPE_OCCUPANCYGRID = "nav_msgs/OccupancyGrid";
export declare const MESSAGE_TYPE_OCCUPANCYGRID2 = "nav_msgs/msg/OccupancyGrid";
export declare const MESSAGE_TYPE_ODOMETRY = "nav_msgs/Odometry";
export declare const MESSAGE_TYPE_ODOMETRY2 = "nav_msgs/msg/Odometry";
export declare const MESSAGE_TYPE_PATH = "nav_msgs/Path";
export declare const MESSAGE_TYPE_PATH2 = "nav_msgs/msg/Path";
export declare const MESSAGE_TYPE_COMPRESSEDIMAGE = "sensor_msgs/CompressedImage";
export declare const MESSAGE_TYPE_DISPLAYJOINTSTATE = "sensor_msgs/JointState";
export declare const MESSAGE_TYPE_IMAGE = "sensor_msgs/Image";
export declare const MESSAGE_TYPE_IMAGE2 = "sensor_msgs/msg/Image";
export declare const MESSAGE_TYPE_LASERSCAN = "sensor_msgs/LaserScan";
export declare const MESSAGE_TYPE_LASERSCAN2 = "sensor_msgs/msg/LaserScan";
export declare const MESSAGE_TYPE_MAGNETICFIELD = "sensor_msgs/MagneticField";
export declare const MESSAGE_TYPE_POINTCLOUD = "sensor_msgs/PointCloud";
export declare const MESSAGE_TYPE_POINTCLOUD2 = "sensor_msgs/PointCloud2";
export declare const MESSAGE_TYPE_ROS2POINTCLOUD2 = "sensor_msgs/msg/PointCloud2";
export declare const MESSAGE_TYPE_RANGE = "sensor_msgs/Range";
export declare const MESSAGE_TYPE_RANGE2 = "sensor_msgs/msg/Range";
export declare const MESSAGE_TYPE_TF = "tf/tfMessage";
export declare const MESSAGE_TYPE_ROS2_TF = "tf/msg/tfMessage";
export declare const MESSAGE_TYPE_TF2 = "tf2_msgs/TFMessage";
export declare const MESSAGE_TYPE_ROS2_TF2 = "tf2_msgs/msg/TFMessage";
export declare const MESSAGE_TYPE_MARKER = "visualization_msgs/Marker";
export declare const MESSAGE_TYPE_MARKER2 = "visualization_msgs/msg/Marker";
export declare const MESSAGE_TYPE_MARKERARRAY = "visualization_msgs/MarkerArray";
export declare const MESSAGE_TYPE_MARKERARRAY2 = "visualization_msgs/msg/MarkerArray";
export declare const MESSAGE_TYPE_INTERACTIVEMARKER = "visualization_msgs/InteractiveMarkerInit";
export declare const MESSAGE_TYPE_INTERACTIVEMARKER2 = "visualization_msgs/msg/InteractiveMarkerInit";
export declare const MESSAGE_TYPE_INTERACTIVEMARKER_UPDATE = "visualization_msgs/InteractiveMarkerUpdate";
export declare const MESSAGE_TYPE_INTERACTIVEMARKER_UPDATE2 = "visualization_msgs/msg/InteractiveMarkerUpdate";
export declare const MESSAGE_TYPE_INTERACTIVEMARKER_FEEDBACK = "visualization_msgs/InteractiveMarkerFeedback";
export declare const MESSAGE_TYPE_INTERACTIVEMARKER_FEEDBACK2 = "visualization_msgs/msg/InteractiveMarkerFeedback";
/** ***************************
 *   Visualizations
 * ************************** */
export declare const VIZ_TYPE_IMAGE = "Image";
export declare const VIZ_TYPE_INTERACTIVEMARKER = "InteractiveMarker";
export declare const VIZ_TYPE_LASERSCAN = "LaserScan";
export declare const VIZ_TYPE_MAP = "Map";
export declare const VIZ_TYPE_MARKER = "Marker";
export declare const VIZ_TYPE_MARKERARRAY = "MarkerArray";
export declare const VIZ_TYPE_ODOMETRY = "Odometry";
export declare const VIZ_TYPE_PATH = "Path";
export declare const VIZ_TYPE_POINT = "Point";
export declare const VIZ_TYPE_POINTCLOUD = "PointCloud";
export declare const VIZ_TYPE_POLYGON = "Polygon";
export declare const VIZ_TYPE_POSE = "Pose";
export declare const VIZ_TYPE_POSEARRAY = "PoseArray";
export declare const VIZ_TYPE_RANGE = "Range";
export declare const VIZ_TYPE_ROBOTMODEL = "RobotModel";
export declare const VIZ_TYPE_TF = "Tf";
export declare const VIZ_TYPE_WRENCH = "Wrench";
export declare const POINT_FIELD_DATATYPES: {
    INT8: number;
    UINT8: number;
    INT16: number;
    UINT16: number;
    INT32: number;
    UINT32: number;
    FLOAT32: number;
    FLOAT64: number;
};
export declare const COLLISION_OBJECT_OPERATIONS: {
    ADD: number;
    REMOVE: number;
    APPEND: number;
    MOVE: number;
};
export declare const SOLID_PRIMITIVE_TYPES: {
    BOX: number;
    SPHERE: number;
    CYLINDER: number;
    CONE: number;
};
export declare const MARKER_OBJECT_TYPES: {
    ARROW: number;
    CUBE: number;
    SPHERE: number;
    CYLINDER: number;
    LINE_STRIP: number;
    LINE_LIST: number;
    CUBE_LIST: number;
    SPHERE_LIST: number;
    POINTS: number;
    TEXT_VIEW_FACING: number;
    MESH_RESOURCE: number;
    TRIANGLE_LIST: number;
};
export declare const LINE_STYLES: {
    LINES: string;
    BILLBOARDS: string;
};
export declare const MAP_COLOR_SCHEMES: {
    MAP: string;
    CONST_MAP: string;
    RAW: string;
};
export declare const LASERSCAN_STYLES: {
    SQUARES: string;
    POINTS: string;
    FLAT_SQUARES: string;
    SPHERES: string;
    BOXES: string;
};
export declare const COLOR_TRANSFORMERS: {
    INTENSITY: string;
    AXIS_COLOR: string;
    FLAT_COLOR: string;
};
export declare const POINTCLOUD_COLOR_CHANNELS: {
    RGB: string;
    INTENSITY: string;
};
export declare const AXES: {
    X: string;
    Y: string;
    Z: string;
};
export declare const INTENSITY_CHANNEL_OPTIONS: {
    X: string;
    Y: string;
    Z: string;
    INTENSITY: string;
};
export declare const ODOMETRY_OBJECT_TYPES: {
    arrow: string;
    axes: string;
};
export declare const POSE_OBJECT_TYPES: {
    arrow: string;
    axes: string;
    flatArrow: string;
};
export declare const WRENCH_OBJECT_TYPES: {
    arrow: string;
    arrowWithCircle: string;
};
/** ***************************
 *   Default Options
 * ************************** */
export declare const DEFAULT_CYLINDER_HEIGHT = 1;
export declare const DEFAULT_CYLINDER_RADIUS = 1;
export declare const DEFAULT_RADIAL_SEGMENTS = 32;
export declare const DEFAULT_CONE_HEIGHT = 1;
export declare const DEFAULT_CONE_RADIUS = 1;
export declare const DEFAULT_COLOR_X_AXIS = "#ff0000";
export declare const DEFAULT_COLOR_Y_AXIS = "#008000";
export declare const DEFAULT_COLOR_Z_AXIS = "#0000ff";
export declare const DEFAULT_COLOR_ARROW = "#f0ff00";
export declare const DEFAULT_COLOR_LINE = "#f0ff00";
export declare const DEFAULT_OPTIONS_SCENE: {
    backgroundColor: number;
    gridSize: number;
    gridDivisions: number;
    gridColor: number;
    gridCenterlineColor: number;
};
export declare const DEFAULT_OPTIONS_TF_VIEWER: {
    selectedFrame: string;
};
export declare const DEFAULT_OPTIONS_ARROW: {
    shaftLength: number;
    shaftRadius: number;
    headLength: number;
    headRadius: number;
};
export declare const DEFAULT_OPTIONS_AXES: {
    axesLength: number;
    axesRadius: number;
};
export declare const DEFAULT_OPTIONS_FLATARROW: {
    arrowLength: number;
};
export declare const DEFAULT_OPTIONS_DISPLAYTRAJECTORY: {
    robot: Group;
    loop: boolean;
};
export declare const DEFAULT_OPTIONS_COLLISION_OBJECT: {};
export declare const DEFAULT_OPTIONS_DEPTHCLOUD: {
    streamType: string;
    f: number;
    maxDepthPerTile: number;
    pointSize: number;
    width: number;
    height: number;
    whiteness: number;
    varianceThreshold: number;
};
export declare const DEFAULT_OPTIONS_IMAGE: {
    queueSize: number;
    width: number;
    height: number;
    compression: string;
};
export declare const DEFAULT_OPTIONS_IMAGE_STREAM: {
    width: number;
    height: number;
};
export declare const DEFAULT_OPTIONS_LASERSCAN: {
    axis: string;
    autocomputeValueBounds: boolean;
    useFixedFrame: boolean;
    minAxisValue: number;
    maxAxisValue: number;
    channelName: string;
    useRainbow: boolean;
    invertRainbow: boolean;
    minColor: string;
    maxColor: string;
    autocomputeIntensityBounds: boolean;
    maxIntensity: number;
    minIntensity: number;
    selectable: boolean;
    style: string;
    size: number;
    alpha: number;
    decayTime: number;
    queueSize: number;
    compression: string;
    colorTransformer: string;
    flatColor: string;
};
export declare const DEFAULT_OPTIONS_MAP: {
    alpha: number;
    colorScheme: string;
    compression: string;
    drawBehind: boolean;
};
export declare const DEFAULT_OPTIONS_MARKER: {
    queueSize: number;
    namespaces: never[];
};
export declare const DEFAULT_OPTIONS_MARKERARRAY: {
    queueSize: number;
    namespaces: never[];
    throttleRate: number;
};
export declare const DEFAULT_OPTIONS_INTERACTIVE_MARKER: {
    queueSize: number;
    namespaces: never[];
    throttleRate: number;
    publishThrottleRate: number;
    hideOtherHandlesOnSelect: boolean;
    hideOtherControlsInstancesOnSelect: boolean;
};
export declare const DEFAULT_OPTIONS_ODOMETRY: {
    positionTolerance: number;
    angleTolerance: number;
    keep: number;
    arrowLength: number;
    axesLength: number;
    axesRadius: number;
    shaftLength: number;
    shaftRadius: number;
    headLength: number;
    headRadius: number;
    type: string;
    color: string;
    alpha: number;
};
export declare const DEFAULT_OPTIONS_PATH: {
    color: string;
    alpha: number;
};
export declare const DEFAULT_OPTIONS_PLANNINGSCENE: {};
export declare const DEFAULT_OPTIONS_POINTCLOUD: {
    compression: string;
    colorChannel: string;
    size: number;
    useRainbow: boolean;
    queueSize: number;
};
export declare const DEFAULT_OPTIONS_POINT: {
    color: string;
    alpha: number;
    radius: number;
};
export declare const DEFAULT_OPTIONS_POLYGON: {
    color: string;
    alpha: number;
};
export declare const DEFAULT_OPTIONS_POSE: {
    type: string;
    axesLength: number;
    axesRadius: number;
    shaftLength: number;
    shaftRadius: number;
    headLength: number;
    headRadius: number;
    color: string;
    alpha: number;
};
export declare const DEFAULT_OPTIONS_TORUS: {
    circleRadius: number;
    tube: number;
    radialSegments: number;
    tubularSegments: number;
    arc: number;
};
export declare const DEFAULT_OPTIONS_ARROW_WITH_CIRCLE: {
    circleConeLength: number;
    circleConeRadius: number;
    circleRadius: number;
    tube: number;
    radialSegments: number;
    tubularSegments: number;
    arc: number;
    shaftLength: number;
    shaftRadius: number;
    headLength: number;
    headRadius: number;
};
export declare const DEFAULT_OPTIONS_WRENCH: {
    type: string;
    circleConeLength: number;
    circleConeRadius: number;
    circleRadius: number;
    tube: number;
    radialSegments: number;
    tubularSegments: number;
    arc: number;
    shaftLength: number;
    shaftRadius: number;
    headLength: number;
    headRadius: number;
    forceColor: string;
    torqueColor: string;
    alpha: number;
    forceArrowScale: number;
    torqueArrowScale: number;
    arrowWidth: number;
};
export declare const DEFAULT_OPTIONS_POSEARRAY: {
    type: string;
    arrowLength: number;
    axesLength: number;
    axesRadius: number;
    shaftLength: number;
    shaftRadius: number;
    headLength: number;
    headRadius: number;
    color: string;
    alpha: number;
};
export declare const DEFAULT_OPTIONS_RANGE: {
    color: string;
    alpha: number;
};
export declare const DEFAULT_OPTIONS_ROBOTMODEL: {};
export declare const DEFAULT_OPTIONS_TF: {};
/** ***************************
 *   Zethus exports
 * ************************** */
export declare const SUPPORTED_MESSAGE_TYPES: string[];
export declare const UNSUPPORTED_MESSAGE_TYPES: string[];
