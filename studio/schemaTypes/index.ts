import { newsArticle } from "./documents/newsArticle"
import { uiTranslations } from "./documents/uiTranslations"
import { wine } from "./documents/wine"
import { localizedSlug } from "./objects/localizedSlug"
import { localizedString } from "./objects/localizedString"
import { localizedText } from "./objects/localizedText"
import { translationEntry } from "./objects/translationEntry"

export const schemaTypes = [
  localizedString,
  localizedText,
  localizedSlug,
  translationEntry,
  newsArticle,
  wine,
  uiTranslations,
]
