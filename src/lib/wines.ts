import type { Lang } from "@/i18n/ui"
import { isSanityConfigured, querySanity } from "@/lib/sanity"

export type Wine = {
  slug: Record<Lang, string>
  name: Record<Lang, string>
  classification: Record<Lang, string>
  note: Record<Lang, string>
  description: Record<Lang, string[]>
  year: string
  image: string
  featuredSpan: string
  featured: boolean
}

export type LocalizedWine = Wine & {
  localizedSlug: string
  localizedName: string
  localizedClassification: string
  localizedNote: string
  localizedDescription: string[]
  href: string
}

type SanityLocalizedSlug = Record<Lang, { current: string }>
type SanityLocalizedText = Record<Lang, string>

type SanityWine = {
  slug: SanityLocalizedSlug
  name: SanityLocalizedText
  classification: SanityLocalizedText
  note: SanityLocalizedText
  description: SanityLocalizedText
  year: string
  image: string
  featuredSpan: string
  featured: boolean
}

export const fallbackWines: Wine[] = [
  {
    slug: {
      it: "amarone-della-valpolicella",
      en: "amarone-della-valpolicella",
      de: "amarone-della-valpolicella",
    },
    name: {
      it: "Amarone della Valpolicella",
      en: "Amarone della Valpolicella",
      de: "Amarone della Valpolicella",
    },
    classification: {
      it: "DOCG",
      en: "DOCG",
      de: "DOCG",
    },
    note: {
      it: "Riserva",
      en: "Reserve",
      de: "Reserva",
    },
    description: {
      it: [
        "La selezione più ampia della cantina, costruita su concentrazione, profondità e un lungo riposo in legno.",
        "Perfetto per una scheda vino gestita da Sanity con immagini, annata e note di degustazione per lingua.",
      ],
      en: [
        "The winery's most structured selection, built around concentration, depth, and long aging in wood.",
        "Ideal for a Sanity-managed wine entry with images, vintage, and tasting notes per language.",
      ],
      de: [
        "Die strukturierteste Auswahl des Weinguts, geprägt von Konzentration, Tiefe und langer Reife im Holz.",
        "Ideal für einen von Sanity verwalteten Weineintrag mit Bildern, Jahrgang und Verkostungsnotizen pro Sprache.",
      ],
    },
    year: "2019",
    image: "/images/vino-amarone.png",
    featuredSpan: "lg:row-span-2",
    featured: true,
  },
  {
    slug: {
      it: "valpolicella-ripasso",
      en: "valpolicella-ripasso",
      de: "valpolicella-ripasso",
    },
    name: {
      it: "Valpolicella Ripasso",
      en: "Valpolicella Ripasso",
      de: "Valpolicella Ripasso",
    },
    classification: {
      it: "DOC Superiore",
      en: "Superiore DOC",
      de: "DOC Superiore",
    },
    note: {
      it: "Elegante",
      en: "Elegant",
      de: "Elegant",
    },
    description: {
      it: ["Il ripasso unisce freschezza e struttura con un profilo più accessibile del catalogo."],
      en: ["Ripasso balances freshness and structure with a more accessible profile in the catalog."],
      de: ["Ripasso verbindet Frische und Struktur in einem zugänglicheren Profil des Katalogs."],
    },
    year: "2021",
    image: "/images/valpolicella-ripasso.jpg",
    featuredSpan: "",
    featured: true,
  },
  {
    slug: {
      it: "recioto-della-valpolicella",
      en: "recioto-della-valpolicella",
      de: "recioto-della-valpolicella",
    },
    name: {
      it: "Recioto della Valpolicella",
      en: "Recioto della Valpolicella",
      de: "Recioto della Valpolicella",
    },
    classification: {
      it: "DOCG",
      en: "DOCG",
      de: "DOCG",
    },
    note: {
      it: "Passito",
      en: "Passito",
      de: "Passito",
    },
    description: {
      it: ["L'etichetta dolce della casa, utile per testare in futuro schede prodotto e abbinamenti in Sanity."],
      en: ["The house sweet wine, useful for future product cards and pairing notes managed in Sanity."],
      de: ["Der süße Hauswein, nützlich für künftige Produktkarten und Pairing-Notizen in Sanity."],
    },
    year: "2020",
    image: "/images/vino-amarone.png",
    featuredSpan: "",
    featured: true,
  },
]

const localeBasePath = (lang: Lang) => (lang === "it" ? "/wines" : `/${lang}/wines`)

const splitParagraphs = (value: string) =>
  value
    .split(/\n\s*\n/g)
    .map((chunk) => chunk.trim())
    .filter(Boolean)

const mapLocalizedWines = (lang: Lang, source: Wine[]): LocalizedWine[] =>
  source.map((wine) => ({
    ...wine,
    localizedSlug: wine.slug[lang],
    localizedName: wine.name[lang],
    localizedClassification: wine.classification[lang],
    localizedNote: wine.note[lang],
    localizedDescription: wine.description[lang],
    href: `${localeBasePath(lang)}/${wine.slug[lang]}`,
  }))

const mapSanityWines = (lang: Lang, source: SanityWine[]): LocalizedWine[] =>
  source.map((wine) => {
    const slugMap = {
      it: wine.slug.it.current,
      en: wine.slug.en.current,
      de: wine.slug.de.current,
    }

    return {
      slug: slugMap,
      name: wine.name,
      classification: wine.classification,
      note: wine.note,
      description: {
        it: splitParagraphs(wine.description.it),
        en: splitParagraphs(wine.description.en),
        de: splitParagraphs(wine.description.de),
      },
      year: wine.year,
      image: wine.image,
      featuredSpan: wine.featuredSpan,
      featured: wine.featured,
      localizedSlug: slugMap[lang],
      localizedName: wine.name[lang],
      localizedClassification: wine.classification[lang],
      localizedNote: wine.note[lang],
      localizedDescription: splitParagraphs(wine.description[lang]),
      href: `${localeBasePath(lang)}/${slugMap[lang]}`,
    }
  })

async function getSanityWines(lang: Lang): Promise<LocalizedWine[] | null> {
  const winesFromSanity = await querySanity<SanityWine>(
    `*[_type == "wine" && defined(slug.${lang}.current)]{
      slug,
      name,
      classification,
      note,
      description,
      year,
      "image": coalesce(image.asset->url, image),
      featuredSpan,
      featured
    }|order(featured desc, year desc)`,
  )

  if (!winesFromSanity) return null
  return mapSanityWines(lang, winesFromSanity)
}

export async function getLocalizedWines(lang: Lang): Promise<LocalizedWine[]> {
  const winesFromSanity = await getSanityWines(lang)
  if (winesFromSanity) return winesFromSanity

  if (isSanityConfigured()) {
    console.warn("[wines] Sanity is configured but wines could not be fetched. Returning an empty list.")
    return []
  }

  return mapLocalizedWines(lang, fallbackWines)
}

export async function getFeaturedWines(lang: Lang): Promise<LocalizedWine[]> {
  const allWines = await getLocalizedWines(lang)
  return allWines.filter((wine) => wine.featured).slice(0, 3)
}

export async function getLocalizedWine(lang: Lang, slug: string): Promise<LocalizedWine | undefined> {
  const wines = await getLocalizedWines(lang)
  return wines.find((wine) => wine.localizedSlug === slug)
}

export async function getWineStaticPaths(lang: Lang) {
  const wines = await getLocalizedWines(lang)
  return wines.map((wine) => ({
    params: { slug: wine.localizedSlug },
    props: { lang },
  }))
}

export function getWinesIndexPath(lang: Lang) {
  return localeBasePath(lang)
}