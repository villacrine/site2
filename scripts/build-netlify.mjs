import { execSync } from "node:child_process"
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs"
import { join } from "node:path"

const STUDIO_OUTPUT_DIR = ".sanity-static"
const SITE_OUTPUT_DIR = "dist"
const STUDIO_DIST_DIR = join(SITE_OUTPUT_DIR, "studio")

function run(command) {
  execSync(command, { stdio: "inherit" })
}

rmSync(STUDIO_OUTPUT_DIR, { recursive: true, force: true })
run("npm run sanity:build")
run("npm run build:site")

if (!existsSync(join(STUDIO_OUTPUT_DIR, "index.html"))) {
  throw new Error(`Missing Studio build output in ${STUDIO_OUTPUT_DIR}`)
}

mkdirSync(SITE_OUTPUT_DIR, { recursive: true })
rmSync(STUDIO_DIST_DIR, { recursive: true, force: true })
cpSync(STUDIO_OUTPUT_DIR, STUDIO_DIST_DIR, { recursive: true })
