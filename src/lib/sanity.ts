import { createClient } from "@sanity/client"

type SanityConfig = {
  projectId: string
  dataset: string
  apiVersion: string
  token?: string
}

const isDev = process.env.NODE_ENV !== "production"

const viteEnv = ((import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env ?? {})

function readEnv(name: string): string | undefined {
  const processValue = process.env[name]
  if (processValue && processValue.trim() !== "") return processValue

  const viteValue = viteEnv[name]
  if (viteValue && viteValue.trim() !== "") return viteValue

  return undefined
}

export function getSanityConfig(): SanityConfig | null {
  const projectId = readEnv("SANITY_PROJECT_ID") ?? readEnv("SANITY_STUDIO_PROJECT_ID") ?? "pt2suy59"
  const dataset = readEnv("SANITY_DATASET") ?? readEnv("SANITY_STUDIO_DATASET") ?? "production"

  if (!projectId || !dataset) return null

  return {
    projectId,
    dataset,
    apiVersion: readEnv("SANITY_API_VERSION") ?? "2026-07-04",
    token: readEnv("SANITY_READ_TOKEN"),
  }
}

export function isSanityConfigured(): boolean {
  return getSanityConfig() !== null
}

function shouldUseSanityCdn(token?: string): boolean {
  const fromEnv = readEnv("SANITY_USE_CDN")
  if (fromEnv === "true") return true
  if (fromEnv === "false") return false

  // Prefer fresh reads in development to avoid confusion after content updates.
  if (isDev) return false
  return !token
}

function getSanityClient() {
  const config = getSanityConfig()
  if (!config) {
    if (isDev) {
      console.warn("[sanity] Missing SANITY_PROJECT_ID or SANITY_DATASET. Falling back to local content.")
    }
    return null
  }

  return createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: config.apiVersion,
    useCdn: shouldUseSanityCdn(config.token),
    token: config.token,
    perspective: "published",
  })
}

export async function querySanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T[] | null> {
  const client = getSanityClient()
  if (!client) return null

  try {
    const result = await client.fetch<T[]>(query, params)
    return Array.isArray(result) ? result : null
  } catch (error) {
    if (isDev) {
      const message = error instanceof Error ? error.message : String(error)
      console.error(`[sanity] Query failed: ${message}`)
    }
    return null
  }
}

export async function querySanityFirst<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  const client = getSanityClient()
  if (!client) return null

  try {
    const result = await client.fetch<T | null>(query, params)
    return result ?? null
  } catch (error) {
    if (isDev) {
      const message = error instanceof Error ? error.message : String(error)
      console.error(`[sanity] Query failed: ${message}`)
    }
    return null
  }
}