import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/resources" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(["script", "style"]),
  }),
});

export const collections = { blog, resources };
