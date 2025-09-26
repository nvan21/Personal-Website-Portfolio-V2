---
title: 'Investigating Model-Free vs Model-Based RL for Sim-to-Real Transfer'
authors: 'Nathan Van Utrecht, Dr. Cody Fleming'
lab: 'Translational Artificial Intelligence Center'
date: 'Aug 2024'
thumbnailUrl: './trac_logo.jpg'
githubUrl: 'https://github.com/nvan21/TrAC-REU'
publicationUrl: 'https://github.com/nvan21/TrAC-REU/blob/main/assets/REU_presentation.pdf'
---

This research investigates the "sim-to-real" gap, where AI agents trained in simulation falter in the real world. I benchmarked model-based (SHAC) versus model-free (SAC, PPO) reinforcement learning algorithms on their ability to adapt to changes in physics and sensor noise in the classic Pendulum control task. My experiments revealed that the model-free SAC algorithm was not only more robust to these variations but also learned an expert policy five times faster than the other methods.