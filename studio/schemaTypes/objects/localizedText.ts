import { defineField, defineType } from "sanity"

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fields: [
    defineField({ name: "it", title: "Italiano", type: "text", rows: 6, validation: (rule) => rule.required() }),
    defineField({ name: "en", title: "English", type: "text", rows: 6, validation: (rule) => rule.required() }),
    defineField({ name: "de", title: "Deutsch", type: "text", rows: 6, validation: (rule) => rule.required() }),
  ],
})
