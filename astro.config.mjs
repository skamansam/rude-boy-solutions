import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [svelte({ preprocess: [] }), tailwind()],
  base: "/rude-boy-solutions",
  site: "https://rudeboy.dev/rude-boy-solutions",
});
