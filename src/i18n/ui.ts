import { querySanityFirst } from "@/lib/sanity"

export const languages = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
} as const

export const defaultLang = "it"

export type Lang = keyof typeof languages

/**
 * Stringhe dell'interfaccia (navigazione, CTA, footer).
 * I contenuti editoriali (vini, articoli, testi) sono gestiti da Sanity
 * con localizzazione a livello di singolo campo.
 */
export const ui = {
  it: {
    "site.title": "Villa Crine",
    "site.description": "Villa Crine — cantina artigianale nel cuore della Valpolicella. Vini autentici, tradizione di famiglia e olio extravergine d'oliva.",
    "nav.wines": "Catalogo Vini",
    "nav.about": "Chi Siamo",
    "nav.territory": "Territorio & Olio",
    "nav.blog": "News",
    "nav.reviews": "Recensioni",
    "nav.booking": "Prenota Degustazione",
    "hero.kicker": "Cantina Artigianale — Valpolicella",
    "hero.title": "L'anima della Valpolicella, in ogni calice",
    "hero.subtitle":
      "Vini artigianali nati da vigneti curati a mano, dove tradizione di famiglia e pazienza del tempo diventano eleganza.",
    "hero.cta.wines": "Scopri i Vini",
    "hero.cta.booking": "Prenota una Degustazione",
    "wines.kicker": "La Collezione",
    "wines.title": "I Nostri Vini",
    "wines.subtitle":
      "Espressioni autentiche del terroir della Valpolicella, dall'Amarone al Valpolicella Ripasso.",
    "wines.cta": "Vedi tutto il catalogo",
    "wines.discover": "Scopri",
    "wines.empty": "Nessun vino disponibile al momento.",
    "story.kicker": "La Nostra Storia",
    "story.title": "Un mestiere di famiglia, coltivato nel tempo",
    "story.body":
      "Da generazioni la famiglia Crine custodisce questi vigneti nel cuore della Valpolicella. Ogni bottiglia è il risultato di scelte artigianali, vendemmie fatte a mano e un lungo riposo in bottaia.",
    "story.cta": "Conosci la cantina",
    "territory.kicker": "Territorio & Olio",
    "territory.title": "La Valpolicella oltre il calice",
    "territory.body":
      "Tra vigneti, olivi e paesaggi collinari, la cantina racconta una cultura agricola che unisce vino ed extra vergine in un'unica identità.",
    "territory.cta": "Scopri il territorio",
    "privacy.title": "Privacy & Cookie Policy",
    "privacy.body":
      "Questa pagina riassume in modo essenziale come vengono trattati i dati personali e i cookie del sito Villa Crine.",
    "reviews.kicker": "Dicono di Noi",
    "reviews.title": "Le voci di chi ci ha scelti",
    "news.kicker": "News",
    "news.title": "Dal diario di cantina",
    "news.body": "Aggiornamenti su vendemmie, nuove annate, degustazioni e vita in cantina.",
    "news.cta": "Leggi tutte le news",
    "news.readMore": "Leggi l'articolo",
    "news.empty": "Nessun articolo disponibile al momento.",
    "newsletter.kicker": "Resta in contatto",
    "newsletter.title": "Iscriviti alla Newsletter",
    "newsletter.body":
      "Nuove annate, eventi in cantina e degustazioni esclusive, direttamente nella tua casella.",
    "newsletter.placeholder": "La tua email",
    "newsletter.cta": "Iscriviti",
    "footer.tagline": "Cantina artigianale nel cuore della Valpolicella.",
    "footer.legal": "Note legali",
    "footer.privacy": "Privacy & Cookie Policy",
    "footer.rights": "Tutti i diritti riservati.",
  },
  en: {
    "site.title": "Villa Crine",
    "site.description": "Villa Crine — artisanal winery in the heart of Valpolicella. Authentic wines, family tradition, and extra virgin olive oil.",
    "nav.wines": "Wine Catalog",
    "nav.about": "About Us",
    "nav.territory": "Territory & Oil",
    "nav.blog": "News",
    "nav.reviews": "Reviews",
    "nav.booking": "Book a Tasting",
    "hero.kicker": "Artisanal Winery — Valpolicella",
    "hero.title": "The soul of Valpolicella, in every glass",
    "hero.subtitle": "Artisanal wines born from hand-tended vineyards, where family tradition and patience turn into elegance.",
    "hero.cta.wines": "Discover the Wines",
    "hero.cta.booking": "Book a Tasting",
    "wines.kicker": "The Collection",
    "wines.title": "Our Wines",
    "wines.subtitle": "Authentic expressions of the Valpolicella terroir, from Amarone to Valpolicella Ripasso.",
    "wines.cta": "View full catalog",
    "wines.discover": "Discover",
    "wines.empty": "No wines available yet.",
    "story.kicker": "Our Story",
    "story.title": "A family craft, cultivated over time",
    "story.body": "For generations, the Crine family has tended to these vineyards in the heart of Valpolicella. Every bottle is the result of artisanal choices, hand-picked harvests, and a long rest in the barrel cellar.",
    "story.cta": "Meet the winery",
    "territory.kicker": "Territory & Oil",
    "territory.title": "Valpolicella beyond the glass",
    "territory.body": "Among vineyards, olive trees, and rolling hills, the winery tells an agricultural story that brings wine and extra virgin olive oil together in one identity.",
    "territory.cta": "Discover the territory",
    "privacy.title": "Privacy & Cookie Policy",
    "privacy.body": "This page gives a concise overview of how Villa Crine handles personal data and cookies.",
    "reviews.kicker": "Testimonials",
    "reviews.title": "What people say about us",
    "news.kicker": "News",
    "news.title": "From the cellar journal",
    "news.body": "Updates on harvests, new vintages, tastings, and life at the winery.",
    "news.cta": "Read all news",
    "news.readMore": "Read article",
    "news.empty": "No articles available yet.",
    "newsletter.kicker": "Keep in touch",
    "newsletter.title": "Subscribe to our Newsletter",
    "newsletter.body": "New vintages, winery events, and exclusive tastings, straight to your inbox.",
    "newsletter.placeholder": "Your email address",
    "newsletter.cta": "Subscribe",
    "footer.tagline": "Artisanal winery in the heart of Valpolicella.",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy & Cookie Policy",
    "footer.rights": "All rights reserved.",
  },
  de: {
    "site.title": "Villa Crine",
    "site.description": "Villa Crine — handwerkliches Weingut im Herzen des Valpolicella. Authentische Weine, Familientradition und extra natives Olivenöl.",
    "nav.wines": "Weinkatalog",
    "nav.about": "Über uns",
    "nav.territory": "Region & Öl",
    "nav.blog": "News",
    "nav.reviews": "Bewertungen",
    "nav.booking": "Verkostung buchen",
    "hero.kicker": "Handwerkliches Weingut — Valpolicella",
    "hero.title": "Die Seele des Valpolicella in jedem Glas",
    "hero.subtitle": "Handwerkliche Weine aus handgepflegten Weinbergen, in denen Familientradition und Geduld zu Eleganz werden.",
    "hero.cta.wines": "Weine entdecken",
    "hero.cta.booking": "Verkostung buchen",
    "wines.kicker": "Die Kollektion",
    "wines.title": "Unsere Weine",
    "wines.subtitle": "Authentischer Ausdruck des Valpolicella-Terroirs, vom Amarone fino zum Valpolicella Ripasso.",
    "wines.cta": "Gesamten Katalog anzeigen",
    "wines.discover": "Entdecken",
    "wines.empty": "Derzeit sind keine Weine verfügbar.",
    "story.kicker": "Unsere Geschichte",
    "story.title": "Ein Familienhandwerk, im Laufe der Zeit gewachsen",
    "story.body": "Seit Generationen pflegt die Familie Crine diese Weinberge im Herzen des Valpolicella. Jede Flasche ist das Ergebnis handwerklicher Entscheidungen, von Hand gelesener Trauben und einer langen Reife im Fasskeller.",
    "story.cta": "Das Weingut kennenlernen",
    "territory.kicker": "Region & Öl",
    "territory.title": "Valpolicella jenseits des Glases",
    "territory.body": "Zwischen Weinbergen, Olivenbäumen und Hügeln erzählt das Weingut eine landwirtschaftliche Geschichte, die Wein und natives Olivenöl in einer Identität vereint.",
    "territory.cta": "Die Region entdecken",
    "privacy.title": "Datenschutz- & Cookie-Richtlinien",
    "privacy.body": "Diese Seite fasst zusammen, wie Villa Crine mit personenbezogenen Daten und Cookies umgeht.",
    "reviews.kicker": "Gästestimmen",
    "reviews.title": "Was unsere Gäste sagen",
    "news.kicker": "News",
    "news.title": "Aus dem Kellertagebuch",
    "news.body": "Aktuelles zu Lese, neuen Jahrgängen, Verkostungen und dem Leben im Weingut.",
    "news.cta": "Alle News lesen",
    "news.readMore": "Artikel lesen",
    "news.empty": "Derzeit sind keine Artikel verfügbar.",
    "newsletter.kicker": "Bleiben wir in Kontakt",
    "newsletter.title": "Newsletter abonnieren",
    "newsletter.body": "Neue Jahrgänge, Events auf dem Weingut und exklusive Verkostungen direkt in Ihrem Posteingang.",
    "newsletter.placeholder": "Ihre E-Mail-Adresse",
    "newsletter.cta": "Abonnieren",
    "footer.tagline": "Handwerkliches Weingut im Herzen des Valpolicella.",
    "footer.legal": "Impressum",
    "footer.privacy": "Datenschutz- & Cookie-Richtlinien",
    "footer.rights": "Alle Rechte vorbehalten.",
  },
} as const

export type UiKey = keyof (typeof ui)[typeof defaultLang]
export type UiMessages = Record<UiKey, string>

type UiTranslationEntry = {
  key: UiKey
  it: string
  en: string
  de: string
}

type SanityUiTranslations = {
  entries: UiTranslationEntry[]
}

const uiCache: Partial<Record<Lang, UiMessages>> = {}

export async function getUi(lang: Lang): Promise<UiMessages> {
  if (uiCache[lang]) return uiCache[lang] as UiMessages

  const sanityDoc = await querySanityFirst<SanityUiTranslations>(
    `*[_type == "uiTranslations"][0]{ entries[] { key, it, en, de } }`,
  )

  if (!sanityDoc || !Array.isArray(sanityDoc.entries)) {
    const fallback = ui[lang] as unknown as UiMessages
    uiCache[lang] = fallback
    return fallback
  }

  const overrides = sanityDoc.entries.reduce<Record<string, string>>((acc, entry) => {
    if (!entry.key) return acc
    acc[String(entry.key)] = entry[lang]
    return acc
  }, {})

  const merged = {
    ...(ui[lang] as unknown as UiMessages),
    ...overrides,
  } as UiMessages

  uiCache[lang] = merged
  return merged
}
