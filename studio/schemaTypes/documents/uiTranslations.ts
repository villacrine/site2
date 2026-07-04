import { defineField, defineType } from "sanity"

export const uiTranslations = defineType({
  name: "uiTranslations",
  title: "UI Translations",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal Title", type: "string", initialValue: "Global UI Copy", validation: (rule) => rule.required() }),
    defineField({
      name: "entries",
      title: "Entries",
      type: "array",
      of: [{ type: "translationEntry" }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})
