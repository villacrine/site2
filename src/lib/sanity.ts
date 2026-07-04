type SanityConfig = {
  projectId: string
  dataset: string
  apiVersion: string
  token?: string
}

export function getSanityConfig(): SanityConfig | null {
  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET

  if (!projectId || !dataset) return null

  return {
    projectId,
    dataset,
    apiVersion: process.env.SANITY_API_VERSION ?? "2025-07-04",
    token: process.env.SANITY_READ_TOKEN,
  }
}

export async function querySanity<T>(query: string): Promise<T[] | null> {
  const config = getSanityConfig()
  if (!config) return null

  const endpoint = new URL(
    `https://${config.projectId}.api.sanity.io/v${config.apiVersion}/data/query/${config.dataset}`,
  )
  endpoint.searchParams.set("query", query)

  const response = await fetch(endpoint, {
    headers: config.token
      ? {
          Authorization: `Bearer ${config.token}`,
        }
      : undefined,
  })

  if (!response.ok) return null

  const payload = (await response.json()) as { result?: T[] }
  return Array.isArray(payload.result) ? payload.result : null
}