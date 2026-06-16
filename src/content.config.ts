import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
const caseStudies = defineCollection({
  type: "content",
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
  type: "content",
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
  type: "content",
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
