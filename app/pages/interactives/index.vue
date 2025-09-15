<script setup>
const features = ref([
  {
    title: 'Test',
    description: 'grap',
    icon: 'i-lucide-smile',
    to: '/interactives/eng/test'
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts'
  },
])
const features2 = ref([
  {
    title: 'Icons',
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons'
  },
  {
    title: 'Fonts',
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts'
  },
  {
    title: 'Color Mode',
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode'
  }
])
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Interactives"
        headline=""
      />
      <UPageBody>
        <UPageSection
          title="Test"
          description="Apps"
          :features="features"
        />
        <USeparator class="my-12" />
        <UPageSection
          title="Beautiful Vue UI components"
          description="Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt."
          :features="features2"
        />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
