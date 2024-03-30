import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()]
});
