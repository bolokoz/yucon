import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/bolokoz/yurio',
        include: 'content/**',
        exclude: ['index.md', '**/README.md', '**/templates/', '**/.obsidian/', '**/parmegianologo/**', '**/projects/']
      }
    })
  }
})
