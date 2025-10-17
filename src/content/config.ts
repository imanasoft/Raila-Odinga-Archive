import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hero: z
      .object({
        eyebrow: z.string().optional(),
        heading: z.string(),
        summary: z.string(),
        image: z
          .object({
            src: z.string(),
            alt: z.string(),
            caption: z.string().optional(),
            credit: z
              .object({
                label: z.string(),
                href: z.string()
              })
              .optional()
          })
          .optional(),
        actions: z
          .array(
            z.object({
              label: z.string(),
              href: z.string(),
              external: z.boolean().default(false)
            })
          )
          .optional(),
        spotlight: z
          .array(
            z.object({
              label: z.string(),
              description: z.string().optional(),
              href: z.string(),
              external: z.boolean().default(false)
            })
          )
          .optional()
      })
      .optional(),
    updated: z.coerce.date().default(() => new Date()),
    sources: z.array(z.string()).default([]),
    layout: z.string().default('@layouts/BaseLayout.astro'),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
          credit: z
            .object({
              label: z.string(),
              href: z.string()
            })
            .optional()
        })
      )
      .default([]),
    sections: z
      .array(
        z.object({
          id: z.string(),
          eyebrow: z.string().optional(),
          title: z.string(),
          summary: z.string().optional(),
          links: z
            .array(
              z.object({
                label: z.string(),
                href: z.string()
              })
            )
            .optional()
        })
      )
      .default([])
  })
});

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()).default(['Site Team']),
    sources: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    category: z.enum(['raila', 'site']).default('site')
  })
});

export const collections = { pages, updates };
