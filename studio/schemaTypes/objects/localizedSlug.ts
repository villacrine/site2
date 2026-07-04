import { defineField, defineType } from "sanity"

export const localizedSlug = defineType({
  name: "localizedSlug",
  title: "Localized Slug",
  type: "object",
  fields: [
    defineField({ name: "it", title: "Slug IT", type: "slug", options: { source: "title.it", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "en", title: "Slug EN", type: "slug", options: { source: "title.en", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "de", title: "Slug DE", type: "slug", options: { source: "title.de", maxLength: 96 }, validation: (rule) => rule.required() }),
  ],
})
