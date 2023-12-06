import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: true,
    speedInsights: {
      enabled: true
    }
  }),
  integrations: [react()]
});