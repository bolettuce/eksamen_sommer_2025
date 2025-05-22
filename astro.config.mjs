import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import image from '@astrojs/image'; // ← tilføj dette

export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
    image() // ← og tilføj denne linje
  ],
});