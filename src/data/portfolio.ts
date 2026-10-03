// Curated display copy layered on top of the content collections.

export const links = {
  cv: "/Nathan_VanUtrecht_CV.pdf",
  email: "nvanutrecht@gmail.com",
  github: "https://github.com/nvan21?tab=repositories",
  linkedin: "https://www.linkedin.com/in/nathan-van-utrecht",
};

export const toolkit = [
  {
    area: "Estimation & SLAM",
    items:
      "EKF, factor graphs (GTSAM), bundle adjustment, ICP, camera calibration",
  },
  {
    area: "AI evaluation",
    items:
      "Golden datasets, commit-pinned eval runs, regression diffs, agent harnesses",
  },
  {
    area: "Robot learning",
    items: "PPO, SAC, BC / GAIL / AIRL, sim-to-real, PyTorch, Gymnasium",
  },
  {
    area: "Perception",
    items:
      "Multi-camera geometry, stereo depth, lidar fusion, YOLOv8, CNNs, ViTs",
  },
  {
    area: "Planning & control",
    items: "Kinematics, trajectory planning, Koopman models, ROS",
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
  global_association: {
    title: "Pixels to meters: pallet mapping",
    pitch:
      "Projects each barcode read from a 4-camera tower onto the rack face in world coordinates, replacing pixel heuristics. Precision rose 0.33 → 0.93 at 100% recall, and it is now live at 10+ customer sites.",
    area: "Perception",
    methods: "Multi-camera geometry, calibration, pose graphs",
  },
  ai_hill_climbing: {
    title: "AI hill-climbing on a robot perception pipeline",
    pitch:
      "Coding agents propose a change, run the real pipeline pinned to that commit, and score it against a 25k-label golden set. The loop found the association change that shipped to production.",
    area: "Learning",
    methods: "LLM agents, golden datasets, regression diffs",
  },
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
      "Proximal Policy Optimization written in PyTorch and trained on Gymnasium tasks from CartPole and LunarLander to MuJoCo Hopper and HalfCheetah, matching Stable-Baselines3 on 5 benchmarks.",
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
    role: "Graduate student researcher",
    notes:
      "Co-designing dexterous hands and policies for Rubik's Cube solving on an Amazon-sponsored project. One JAX PPO policy covers <b>2,048</b> generated hand designs, and on hardware the physical hand solved a scrambled cube.",
    current: true,
  },
  {
    date: "2026",
    kind: "Industry",
    org: "Brain Corp",
    place: "San Diego",
    role: "Software engineering intern",
    notes:
      "Shipped metric world-coordinate association for a warehouse robot's 4-camera perception pipeline: precision rose <b>0.33 → 0.93</b> at full recall, live at <b>10+</b> customer sites. Built the <b>25k</b>-label eval platform and the harness that let AI coding agents hill-climb it, plus a bundle-adjustment stitcher <b>48×</b> faster than the existing one.",
  },
  {
    date: "2023 – 25",
    kind: "Research",
    org: "Coordinated Systems Lab",
    place: "Iowa State",
    role: "Undergraduate researcher",
    notes:
      "Stress-tested BC, GAIL, and AIRL under shifted physics and goals; AIRL beat direct imitation by <b>140%+</b> on transfer tasks. Wrote it up as my honors thesis.",
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
    role: "REU researcher",
    notes:
      "Benchmarked model-based and model-free RL for sim-to-real. SAC converged <b>5×</b> faster than SHAC and was more robust to noise.",
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
    place: "Augusta, GA",
    role: "Product engineering intern",
    notes:
      "Took a tool-storage bracket from Creo concept to physical test; FEA and topology optimization cut its weight <b>25%</b>. Four CAD concepts for new tractor cab features.",
  },
  {
    date: "2022 – 23",
    kind: "Industry",
    org: "Grace Technologies",
    place: "Davenport, IA",
    role: "Software engineering intern",
    notes:
      "Six Python validation suites (<b>&gt;80%</b> less manual testing, coverage <b>60% → 95%</b>) and a field debugger that cut troubleshooting from 45 to under 10 minutes and callbacks <b>40%</b>.",
  },
];

export interface Degree {
  date: string;
  school: string;
  place: string;
  degree: string;
  notes?: string;
}

export const education: Degree[] = [
  {
    date: "2025 – 27",
    school: "UC San Diego",
    place: "San Diego, CA",
    degree: "M.S. Intelligent Systems, Robotics, and Control",
    notes: "Expected June 2027.",
  },
  {
    date: "2021 – 25",
    school: "Iowa State University",
    place: "Ames, IA",
    degree: "B.S. Mechanical Engineering, minor in Cyber Physical Systems",
    notes: "GPA <b>3.98</b>/4.00, summa cum laude, University Honors Program, Tau Beta Pi.",
  },
];
