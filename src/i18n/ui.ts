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
    "nav.wines": "I Vini",
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
    "story.kicker": "La Nostra Storia",
    "story.title": "Un mestiere di famiglia, coltivato nel tempo",
    "story.body":
      "Da generazioni la famiglia Crine custodisce questi vigneti nel cuore della Valpolicella. Ogni bottiglia è il risultato di scelte artigianali, vendemmie fatte a mano e un lungo riposo in bottaia.",
    "story.cta": "Conosci la cantina",
    "reviews.kicker": "Dicono di Noi",
    "reviews.title": "Le voci di chi ci ha scelti",
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
} as const
