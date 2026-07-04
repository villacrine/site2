import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./studio/schemaTypes"

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID ?? "pt2suy59"
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET ?? "production"

export default defineConfig({
  name: "default",
  title: "Villa Crine Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
