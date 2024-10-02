import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [svelte(), react(), tailwind()],
  base: "/rude-boy-solutions",
  site: "https://rudeboy.dev/rude-boy-solutions",
});
