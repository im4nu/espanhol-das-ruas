import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function htmlSiteUrl(siteUrl: string): Plugin {
  return {
    name: 'html-site-url',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', siteUrl)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const siteUrl = (env.VITE_SITE_URL ?? 'https://espanholdasruas.com').replace(/\/$/, '')

  return {
    plugins: [react(), tailwindcss(), htmlSiteUrl(siteUrl)],
  }
})
