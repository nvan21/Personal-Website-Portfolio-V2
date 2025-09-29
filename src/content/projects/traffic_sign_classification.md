---
title: "Traffic Sign Classification" 
pitch: "A program that tracks basketball shots and keeps track of shooting statistics using computer vision."
image: "traffic_sign_classification.png" 
skills:
- Vision Transformers
- Convolutional Neural Networks
- Data Augmentation 
githubUrl: "https://github.com/nvan21/Traffic-Sign-Classification" 
publishDate: 2025-09-29
---
The Problem

My goal was to create a task manager that actively helps users prioritize, unlike traditional apps where users have to do all the sorting themselves. I wanted to see if I could use an AI model to automatically suggest the most important task for any given day.
My Process

I started by wireframing the user interface in Figma, focusing on a clean, minimal design. For the tech stack, I chose Astro for its performance and React for the interactive UI components. The core of the application is an API route that sends the user's task list to the OpenAI API for analysis and prioritization.
Challenges & Solutions

The biggest challenge was crafting the right prompt for the AI to get consistent and useful results. After much iteration, I developed a prompt that includes the user's long-term goals and deadlines, which significantly improved the quality of the AI's suggestions. I also implemented a caching layer to reduce API costs.
Results & Reflection

The final application successfully prioritizes tasks and has received positive feedback from early testers. In the future, I would explore using a more fine-tuned model to further personalize the suggestions. This project was a great lesson in prompt engineering and API design.