import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    details: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ),
    license: z.string(),
    repository: z.object({
      label: z.string(),
      href: z.string(),
    }).optional(),
    availability: z.string(),
    deployment: z.string(),
    started: z.string(),
    updated: z.string(),
    owner: z.object({
      label: z.string(),
      href: z.string(),
    }),
  }),
});

export const collections = { projects };
