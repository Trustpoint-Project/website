
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://industrial-security.io",
  output: "static",
  integrations: [sitemap()],
});
