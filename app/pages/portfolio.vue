<script setup>
const projects = [
  {
    title: 'Project Alpha'
  },
  {
    title: 'Project Beta'
  },
  {
    title: 'Project Gamma'
  }
]
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Portfolio"
        headline="Finished projects"
      />
      <UPageBody>
        <UPageList>
          <UPageCard
            v-for="(post, index) in projects"
            :key="index"
            :title="post.title || post.path"
            :to="post.path"
          />
        </UPageList>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
