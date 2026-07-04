import { createClient } from "@sanity/client"
import { existsSync, readFileSync } from "node:fs"
import { newsArticles } from "../src/lib/news.ts"
import { fallbackWines } from "../src/lib/wines.ts"
import { defaultLang, ui, type Lang } from "../src/i18n/ui.ts"

type Localized<T> = Record<Lang, T>

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required env var: ${name}`)
  }
  return value
}

function loadDotEnv(filePath: string) {
  if (!existsSync(filePath)) return

  const raw = readFileSync(filePath, "utf8")
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) return

    const separator = trimmed.indexOf("=")
    if (separator < 0) return

    const key = trimmed.slice(0, separator).trim()
    const value = trimmed.slice(separator + 1).trim().replace(/^['\"]|['\"]$/g, "")

    if (!process.env[key]) {
      process.env[key] = value
    }
  })
}

loadDotEnv(".env")

const projectId = process.env.SANITY_PROJECT_ID ?? process.env.SANITY_STUDIO_PROJECT_ID ?? "pt2suy59"
const dataset = process.env.SANITY_DATASET ?? process.env.SANITY_STUDIO_DATASET ?? "production"
const apiVersion = process.env.SANITY_API_VERSION ?? "2026-07-04"

if (!projectId || !dataset) {
  throw new Error("Missing SANITY_PROJECT_ID/SANITY_DATASET (or SANITY_STUDIO_*)")
}

const token ="skvj6oeznIbLdKnZo2b56XVK26h6tRWF0hd15F41EaguXxsCcDOdB5ldJV5i6g03O5kjBkbnQMKtb7mp0NAFZ11OgsEiVlBPrY6zTXWE35ozrZeDlEJzXGSFlZdXTEU4P4DoFnlrQeun6CR55qBd28zBmOWtLqLhDi7j3ykAMg0TZOBntw74"

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const toSlug = (slug: Localized<string>) => ({
  it: { _type: "slug", current: slug.it },
  en: { _type: "slug", current: slug.en },
  de: { _type: "slug", current: slug.de },
})

const toText = (value: Localized<string[]>) => ({
  it: value.it.join("\n\n"),
  en: value.en.join("\n\n"),
  de: value.de.join("\n\n"),
})

const uiEntries = Object.keys(ui[defaultLang]).map((key, index) => ({
  _key: `ui-${index}-${key.replace(/[^a-zA-Z0-9]/g, "-")}`,
  _type: "translationEntry",
  key,
  it: ui.it[key as keyof typeof ui.it],
  en: ui.en[key as keyof typeof ui.en],
  de: ui.de[key as keyof typeof ui.de],
}))

const newsDocs = newsArticles.map((article) => ({
  _id: `newsArticle.${article.slug.it}`,
  _type: "newsArticle",
  title: article.title,
  slug: toSlug(article.slug),
  excerpt: {
    it: article.excerpt.it,
    en: article.excerpt.en,
    de: article.excerpt.de,
  },
  body: toText(article.body),
  category: article.category,
  publishedAt: article.publishedAt,
  coverImage: article.coverImage,
  readingTime: article.readingTime,
}))

const wineDocs = fallbackWines.map((wine) => ({
  _id: `wine.${wine.slug.it}`,
  _type: "wine",
  name: wine.name,
  slug: toSlug(wine.slug),
  classification: wine.classification,
  note: wine.note,
  description: toText(wine.description),
  year: wine.year,
  image: wine.image,
  featuredSpan: wine.featuredSpan,
  featured: wine.featured,
}))

const uiDoc = {
  _id: "uiTranslations.singleton",
  _type: "uiTranslations",
  title: "Global UI Copy",
  entries: uiEntries,
}

async function run() {
  const docs = [...newsDocs, ...wineDocs, uiDoc]

  const tx = client.transaction()
  docs.forEach((doc) => {
    tx.createOrReplace(doc)
  })

  await tx.commit({ autoGenerateArrayKeys: true })

  console.log(`Seed completed: ${newsDocs.length} news, ${wineDocs.length} wines, ${uiEntries.length} ui keys.`)
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
