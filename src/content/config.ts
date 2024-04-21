import { defineCollection, reference, z } from 'astro:content'

const technologies = defineCollection({
    type: 'data',
    schema: z.object({
        slug: z.string(),
        name: z.string(),
        type: z.array(z.string()),
        logo: z.string(),
        level: z.number(),
        opinion: z.string(),
    }),
})

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        type: z.enum(['personal', 'professional', 'freelance']),
        repo_url: z.string().nullable(),
        live_url: z.string().nullable(),
        image: z.string().nullable(),
        progress: z.number().nullable(),
        description: z.string(),
        technologies: reference('technologies').array().nullable(),
    }),
})

export const collections = {
    technologies,
    projects,
}
