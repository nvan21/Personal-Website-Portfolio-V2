import { defineCollection, z } from 'astro:content';

const researchCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    lab: z.string(),
    school: z.string(),
    date: z.string(),
    thumbnailUrl: z.string().optional(),
    publicationUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

const industryCollection = defineCollection({
    schema: z.object({
        company: z.string(),
        role: z.string(),
        date: z.date(),
        project: z.string(),
        thumbnailUrl: z.string(),
        skills: z.array(z.string())
    })
})

const projectsCollection = defineCollection({
  type: "content", // Each project will be a markdown file
  schema: z.object({
    title: z.string(),
    pitch: z.string(), // The one-sentence summary
    image: z.string(), // Path to the main project image
    skills: z.array(z.string()), // A list of technologies used
    githubUrl: z.string().url().optional(), // Optional link to the GitHub repo
    publishDate: z.date(),
  }),
});

export const collections = {
  'research': researchCollection,
  'industry': industryCollection,
  'projects': projectsCollection
};