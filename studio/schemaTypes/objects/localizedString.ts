import { defineField, defineType } from "sanity"

export const localizedString = defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  fields: [
    defineField({ name: "it", title: "Italiano", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "en", title: "English", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "de", title: "Deutsch", type: "string", validation: (rule) => rule.required() }),
  ],
})
