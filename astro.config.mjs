import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/avelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [avelte(), react(), tailwind()],
  base: "rude-boy-solutions",
  site: "https://rudeboy.dev/rude-boy-solutions",
});
