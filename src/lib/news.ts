import type { Lang } from "@/i18n/ui"

export type NewsArticle = {
  slug: Record<Lang, string>
  title: Record<Lang, string>
  excerpt: Record<Lang, string>
  body: Record<Lang, string[]>
  category: Record<Lang, string>
  publishedAt: string
  coverImage: string
  readingTime: number
}

export type LocalizedNewsArticle = NewsArticle & {
  localizedSlug: string
  localizedTitle: string
  localizedExcerpt: string
  localizedBody: string[]
  localizedCategory: string
  href: string
  dateLabel: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: {
      it: "vendemmia-2026",
      en: "harvest-2026",
      de: "lese-2026",
    },
    title: {
      it: "Vendemmia 2026: il lavoro comincia in vigna",
      en: "Harvest 2026: the work begins in the vineyard",
      de: "Lese 2026: Die Arbeit beginnt im Weinberg",
    },
    excerpt: {
      it: "Le prime scelte agronomiche dell'anno definiscono la qualità del futuro Amarone.",
      en: "The first agronomic decisions of the year shape the future Amarone.",
      de: "Die ersten agronomischen Entscheidungen des Jahres prägen den zukünftigen Amarone.",
    },
    body: {
      it: [
        "L'annata 2026 è partita con un controllo meticoloso delle vigne e una potatura calibrata su ogni parcella.",
        "In cantina lavoriamo per preservare freschezza e struttura, così che ogni grappolo arrivi alla vendemmia nelle condizioni migliori.",
        "Nei prossimi mesi pubblicheremo aggiornamenti sulle micro-zone, sulle temperature e sulle decisioni che guideranno la raccolta.",
      ],
      en: [
        "The 2026 vintage began with a meticulous vineyard check and pruning tailored to each parcel.",
        "In the cellar, we work to preserve freshness and structure so each cluster reaches harvest in the best possible condition.",
        "Over the coming months we will publish updates on micro-zones, temperatures, and the decisions guiding the harvest.",
      ],
      de: [
        "Der Jahrgang 2026 begann mit einer sorgfältigen Kontrolle der Weinberge und einem auf jede Parzelle abgestimmten Rebschnitt.",
        "Im Keller arbeiten wir daran, Frische und Struktur zu bewahren, damit jede Traube die Lese in bestem Zustand erreicht.",
        "In den kommenden Monaten veröffentlichen wir Updates zu Mikro-Lagen, Temperaturen und den Entscheidungen rund um die Lese.",
      ],
    },
    category: {
      it: "Vendemmia",
      en: "Harvest",
      de: "Lese",
    },
    publishedAt: "2026-06-18",
    coverImage: "/images/hero-vigneti.png",
    readingTime: 3,
  },
  {
    slug: {
      it: "bottaia-e-riposo",
      en: "barrel-cellar-and-rest",
      de: "fasskeller-und-reife",
    },
    title: {
      it: "La bottaia e il tempo del riposo",
      en: "The barrel cellar and the time of rest",
      de: "Der Fasskeller und die Zeit der Ruhe",
    },
    excerpt: {
      it: "Perché il passaggio in legno non è un dettaglio tecnico ma una scelta di stile.",
      en: "Why time in wood is not a technical detail but a stylistic choice.",
      de: "Warum der Ausbau im Holz kein technisches Detail, sondern eine Stilentscheidung ist.",
    },
    body: {
      it: [
        "Le botti grandi e i tonneaux non servono solo a contenere il vino: definiscono il ritmo dell'evoluzione aromatica.",
        "Ogni cuvée resta nel legno solo quanto serve a trovare equilibrio tra profondità, eleganza e bevibilità.",
        "Il prossimo assaggio in bottaia sarà dedicato al Ripasso 2024, per verificare l'equilibrio tra frutto e trama tannica.",
      ],
      en: [
        "Large casks and tonneaux do more than hold wine: they define the pace of aromatic evolution.",
        "Each cuvée stays in wood only as long as needed to find balance between depth, elegance, and drinkability.",
        "The next barrel-room tasting will focus on Ripasso 2024 to check the balance between fruit and tannic texture.",
      ],
      de: [
        "Große Fässer und Tonneaux dienen nicht nur als Behälter für den Wein: Sie bestimmen das Tempo der aromatischen Entwicklung.",
        "Jede Cuvée bleibt nur so lange im Holz, wie nötig ist, um Tiefe, Eleganz und Trinkfluss auszubalancieren.",
        "Die nächste Verkostung im Fasskeller widmet sich dem Ripasso 2024, um das Gleichgewicht von Frucht und Tannin zu prüfen.",
      ],
    },
    category: {
      it: "Cantina",
      en: "Cellar",
      de: "Keller",
    },
    publishedAt: "2026-05-02",
    coverImage: "/images/cantina-bottaia.png",
    readingTime: 4,
  },
  {
    slug: {
      it: "olio-nuovo-autunno",
      en: "new-oil-autumn",
      de: "neues-olivenoel-herbst",
    },
    title: {
      it: "Olio nuovo: il raccolto d'autunno oltre il vino",
      en: "New oil: the autumn harvest beyond wine",
      de: "Neues Olivenöl: Die Herbsternte jenseits des Weins",
    },
    excerpt: {
      it: "La nostra identità agricola passa anche dall'olio extravergine prodotto in azienda.",
      en: "Our agricultural identity also runs through the extra virgin olive oil we produce on site.",
      de: "Unsere landwirtschaftliche Identität zeigt sich auch im extra nativen Olivenöl aus eigener Produktion.",
    },
    body: {
      it: [
        "Le olive raccontano la stessa attenzione che dedichiamo ai vigneti: raccolta tempestiva, selezione rigorosa e frangitura rapida.",
        "Nel diario di cantina vogliamo raccontare anche questi passaggi, perché fanno parte della stessa cultura agricola.",
        "Seguiranno note sulla prossima spremitura e su come l'olio accompagnerà le degustazioni stagionali.",
      ],
      en: [
        "The olives reflect the same care we give the vineyards: timely picking, strict selection, and fast pressing.",
        "In the cellar journal we also want to share these moments, because they belong to the same farming culture.",
        "More notes will follow on the next pressing and on how the oil will accompany seasonal tastings.",
      ],
      de: [
        "Die Oliven spiegeln dieselbe Sorgfalt wider wie die Weinberge: rechtzeitige Ernte, strenge Selektion und schnelle Pressung.",
        "Im Kellertagebuch wollen wir auch diese Momente zeigen, denn sie gehören zur gleichen landwirtschaftlichen Kultur.",
        "Es folgen weitere Notizen zur nächsten Pressung und dazu, wie das Öl die saisonalen Verkostungen begleiten wird.",
      ],
    },
    category: {
      it: "Olio",
      en: "Oil",
      de: "Öl",
    },
    publishedAt: "2026-04-18",
    coverImage: "/images/vino-amarone.png",
    readingTime: 3,
  },
]

const localeBasePath = (lang: Lang) => (lang === "it" ? "/news" : `/${lang}/news`)

const formatDate = (date: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date))

export function getLocalizedNewsArticles(lang: Lang): LocalizedNewsArticle[] {
  return newsArticles
    .slice()
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
    .map((article) => ({
      ...article,
      localizedSlug: article.slug[lang],
      localizedTitle: article.title[lang],
      localizedExcerpt: article.excerpt[lang],
      localizedBody: article.body[lang],
      localizedCategory: article.category[lang],
      href: `${localeBasePath(lang)}/${article.slug[lang]}`,
      dateLabel: formatDate(article.publishedAt, lang),
    }))
}

export function getLocalizedNewsArticle(lang: Lang, slug: string): LocalizedNewsArticle | undefined {
  const article = newsArticles.find((entry) => entry.slug[lang] === slug)
  if (!article) return undefined

  return {
    ...article,
    localizedSlug: article.slug[lang],
    localizedTitle: article.title[lang],
    localizedExcerpt: article.excerpt[lang],
    localizedBody: article.body[lang],
    localizedCategory: article.category[lang],
    href: `${localeBasePath(lang)}/${article.slug[lang]}`,
    dateLabel: formatDate(article.publishedAt, lang),
  }
}

export function getNewsStaticPaths(lang: Lang) {
  return newsArticles.map((article) => ({
    params: { slug: article.slug[lang] },
    props: { lang },
  }))
}

export function getNewsIndexPath(lang: Lang) {
  return localeBasePath(lang)
}