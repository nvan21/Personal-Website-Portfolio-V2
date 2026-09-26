import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: "content", // Each project will be a markdown file
  schema: z.object({
    title: z.string(),
    pitch: z.string(), // The one-sentence summary
    image: z.string(), // Filename in public/images
    skills: z.array(z.string()), // A list of technologies used
    githubUrl: z.string().url().optional(), // Optional link to the GitHub repo
    publishDate: z.date(),
  }),
});

export const collections = {
  'projects': projectsCollection
};
