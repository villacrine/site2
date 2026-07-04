import { defineField, defineType } from "sanity"

export const translationEntry = defineType({
  name: "translationEntry",
  title: "Translation Entry",
  type: "object",
  fields: [
    defineField({
      name: "key",
      title: "Translation Key",
      type: "string",
      description: "Use existing keys from src/i18n/ui.ts, e.g. nav.wines",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "it", title: "Italiano", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "en", title: "English", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "de", title: "Deutsch", type: "text", rows: 3, validation: (rule) => rule.required() }),
  ],
  preview: {
    select: {
      title: "key",
      subtitle: "it",
    },
  },
})
