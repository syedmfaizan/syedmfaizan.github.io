import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
const caseStudies = defineCollection({
  loader: glob({
    base: "./src/content/case-studies",
    pattern: "*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    impact: z.array(z.string()).default([]),
  }),
});
const writing = defineCollection({
  loader: glob({
    base: "./src/content/writing",
    pattern: "*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    readingTime: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});
const artifacts = defineCollection({
  loader: glob({
    base: "./src/content/artifacts",
    pattern: "*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    type: z.enum(["Checklist", "Template", "Guide", "Reference"]),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});
export const collections = { "case-studies": caseStudies, writing, artifacts };
