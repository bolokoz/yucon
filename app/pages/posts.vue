<script setup lang="ts">

const { data } = await useAsyncData('navigation', () => {
  return queryCollection('docs').order('date', 'desc')
})

function flattenPosts(tree, parentTags = []) {
  let posts = []

  for (const node of tree) {
    // derive tags from parent + current folder if it's not a "file"
    const tags = [...parentTags]

    // if this node has children, it’s a folder → add as a tag
    if (node.children && node.children.length > 0) {
      tags.push(node.stem.split("/").pop())
      posts = posts.concat(flattenPosts(node.children, tags))
    } else {
      // it's a post (leaf)
      const filename = node.path.split("/").pop()
      let date = null

      // check if filename starts with a date like YYYY-MM-DD
      const match = filename.match(/^(\d{4}-\d{2}-\d{2})/)
      if (match) {
        date = match[1]
      }

      posts.push({
        title: node.title,
        path: node.path,
        tags,
        ...(date ? { date } : {})
      })
    }
  }

  return posts
}
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Latest Posts"
        headline="headline"
      />
      <UPageBody>
        <UPageList>
          <UPageCard
            v-for="(post, index) in flattenPosts(data)"
            :key="index"
            :title="post.title || post.path"
            :to="post.path"
          />
        </UPageList>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
