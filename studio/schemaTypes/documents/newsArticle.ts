import { defineField, defineType } from "sanity"

export const newsArticle = defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "localizedSlug", validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Body", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Category", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "publishedAt", title: "Published At", type: "date", validation: (rule) => rule.required() }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "localizedString" })],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "readingTime", title: "Reading Time (min)", type: "number", initialValue: 3, validation: (rule) => rule.required().min(1) }),
  ],
  preview: {
    select: {
      title: "title.it",
      subtitle: "publishedAt",
      media: "coverImage",
    },
  },
})
