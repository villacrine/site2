import { defineField, defineType } from "sanity"

export const wine = defineType({
  name: "wine",
  title: "Wine",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "localizedSlug", validation: (rule) => rule.required() }),
    defineField({ name: "classification", title: "Classification", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "note", title: "Note", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "year", title: "Year", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "localizedString" })],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "featuredSpan", title: "Featured Span CSS", type: "string", initialValue: "" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: {
      title: "name.it",
      subtitle: "year",
      media: "image",
    },
  },
})
