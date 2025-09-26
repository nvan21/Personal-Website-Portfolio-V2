import { defineCollection, z } from 'astro:content';

const researchCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    lab: z.string(),
    date: z.string(),
    thumbnailUrl: z.string(),
    publicationUrl: z.string(),
    githubUrl: z.string(),
  }),
});

const industryCollection = defineCollection({
    schema: z.object({
        company: z.string(),
        role: z.string(),
        date: z.date(),
        project: z.string(),
        thumbnailUrl: z.string()
    })
})

export const collections = {
  'research': researchCollection,
  'industry': industryCollection
};