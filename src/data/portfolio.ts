// Curated display copy layered on top of the content collections.

export const links = {
  cv: "/Nathan_VanUtrecht_CV.pdf",
  email: "nvanutrecht@ucsd.edu",
  github: "https://github.com/nvan21?tab=repositories",
  linkedin: "https://www.linkedin.com/in/nathan-van-utrecht",
};

export const toolkit = [
  {
    area: "Estimation & SLAM",
    items:
      "EKF, factor graphs (GTSAM), ICP scan matching, quaternion optimization",
  },
  {
    area: "Robot learning",
    items: "PPO, SAC, BC / GAIL / AIRL, sim-to-real, PyTorch, Gymnasium",
  },
  {
    area: "Perception",
    items: "YOLOv8, CNNs, vision transformers, segmentation",
  },
  {
    area: "Planning & control",
    items:
      "Kinematics, screw trajectories, feedforward + PI, Koopman models, ROS",
  },
  {
    area: "Mechanical",
    items: "Creo Parametric, Windchill, FEA, prototyping and validation",
  },
];

export interface ProjectDetail {
  title: string;
  pitch: string;
  area: string;
  methods: string;
}

// Key order is display order.
export const projectDetails: Record<string, ProjectDetail> = {
  ekf_vi_slam: {
    title: "Visual-inertial SLAM",
    pitch:
      "A joint EKF on SE(3) that fuses IMU kinematics with optical-flow stereo features, bounding the drift of IMU-only dead reckoning on a Clearpath Jackal.",
    area: "Estimation",
    methods: "EKF, sensor fusion, stereo vision",
  },
  factor_graph_slam: {
    title: "LiDAR SLAM with factor graphs",
    pitch:
      "Odometry, ICP scan matching, and GTSAM pose-graph optimization. Proximity-based loop closures cut total graph error 65%, against 43% for fixed-interval ones.",
    area: "Estimation",
    methods: "GTSAM, ICP, pose graphs",
  },
  kuka_youbot: {
    title: "Mobile manipulator pick-and-place",
    pitch:
      "Kinematics, 8-segment screw trajectories, and a feedforward + PI controller for a KUKA youBot. End-effector error converges within 5 s with little to no overshoot.",
    area: "Control",
    methods: "Kinematics, trajectory planning, CoppeliaSim",
  },
  kan_koopman: {
    title: "Koopman models with KANs",
    pitch:
      "Kolmogorov-Arnold Networks as learned Koopman observables for a soft robot arm. Needs under half the training data of a polynomial EDMD baseline and runs in ~2 ms.",
    area: "Learning",
    methods: "PyTorch, Koopman operators, soft robotics",
  },
  imu_fused_panorama_stitching: {
    title: "IMU orientation tracking & panoramas",
    pitch:
      "Projected gradient descent over unit quaternions tracks IMU orientation against VICON ground truth, then stitches camera frames into a 2048×1536 panorama.",
    area: "Estimation",
    methods: "Quaternions, constrained optimization",
  },
  f1tenth_autonomous_racing: {
    title: "F1Tenth autonomous racing",
    pitch:
      "A follow-the-gap planner on raw LiDAR that laps the Nürburgring in the F1Tenth simulator, with separate fast and smooth modes.",
    area: "Control",
    methods: "ROS, LiDAR, reactive planning",
  },
  ppo_algorithm_implementation: {
    title: "PPO from scratch",
    pitch:
      "Proximal Policy Optimization written in PyTorch and trained on four Gymnasium tasks, from CartPole and LunarLander to MuJoCo Hopper and HalfCheetah.",
    area: "Learning",
    methods: "PyTorch, Gymnasium",
  },
  basketball_shot_detection: {
    title: "Basketball shot detection",
    pitch:
      "YOLOv8 and segmentation track the ball, and a fitted trajectory calls make or miss.",
    area: "Perception",
    methods: "YOLOv8, transfer learning",
  },
  traffic_sign_classification: {
    title: "Traffic signs under occlusion",
    pitch:
      "Five models compared on occluded signs. A small custom CNN hit 95.9% accuracy at 1 ms per image; ResNet-50 reached 98.2% but ran 4.6× slower.",
    area: "Perception",
    methods: "CNNs, ViTs, data augmentation",
  },
};

export interface Role {
  date: string;
  kind: "Research" | "Industry";
  org: string;
  place: string;
  role: string;
  /** Plain text; wrap numbers in <b> to highlight them. */
  notes: string;
  links?: { label: string; href: string }[];
  current?: boolean;
}

// Newest first.
export const experience: Role[] = [
  {
    date: "2026 – now",
    kind: "Research",
    org: "Xiaolong Wang Lab",
    place: "UC San Diego",
    role: "Graduate researcher",
    notes:
      "Using real-world robot data to make simulation more faithful, so learned policies survive the move to hardware.",
    current: true,
  },
  // TODO: placeholder until Brain Corp details are filled in.
  {
    date: "TBD",
    kind: "Industry",
    org: "Brain Corp",
    place: "San Diego",
    role: "Engineering intern",
    notes: "Details coming soon.",
  },
  {
    date: "2024 – 25",
    kind: "Research",
    org: "Coordinated Systems Lab",
    place: "Iowa State",
    role: "Honors researcher",
    notes:
      "Stress-tested BC, GAIL, and AIRL under shifted physics and goals. Wrote it up as my honors thesis.",
    links: [
      {
        label: "thesis",
        href: "https://github.com/nvan21/Honors-Capstone-IL-Robustness/blob/main/assets/paper.pdf",
      },
      {
        label: "code",
        href: "https://github.com/nvan21/Honors-Capstone-IL-Robustness",
      },
    ],
  },
  {
    date: "2024",
    kind: "Research",
    org: "TrAC REU",
    place: "Iowa State",
    role: "Research intern",
    notes:
      "Benchmarked model-based and model-free RL for sim-to-real. SAC reached an expert policy <b>5×</b> faster.",
    links: [
      {
        label: "slides",
        href: "https://github.com/nvan21/TrAC-REU/blob/main/assets/REU_presentation.pdf",
      },
      { label: "code", href: "https://github.com/nvan21/TrAC-REU" },
    ],
  },
  {
    date: "2023",
    kind: "Industry",
    org: "John Deere",
    place: "Product engineering",
    role: "Engineering intern",
    notes:
      "Took a tool-storage bracket from Creo concept to physical test; FEA cut its weight <b>15%</b>. Four CAD concepts for new tractor cab features.",
  },
  {
    date: "2022 – 23",
    kind: "Industry",
    org: "Grace Technologies",
    place: "IIoT engineering",
    role: "Engineering intern",
    notes:
      "Six Python validation suites (<b>&gt;80%</b> less manual testing) and a field debugger that cut callbacks <b>40%</b>.",
  },
];

