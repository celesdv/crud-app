import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import css from 'rollup-plugin-css-only'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [css({output:'public/build/extra.css'}), svelte()]
})
