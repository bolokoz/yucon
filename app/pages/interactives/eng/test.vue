<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Interactives"
        headline=""
      />
      <UPageBody>
        <UForm
          class="space-y-4"
        >
          <UFormField
            :label="`type1: ${value}`"
          >
            <USlider
              v-model="value"
              :min="20"
              :max="80"
              step="5"
              tooltip
            />
          </UFormField>
          <UFormField
            :label="`type 2: ${value2}`"
          >
            <USlider
              v-model="value2"
              :min="20"
              :max="80"
              step="5"
              tooltip
              color="secondary"
            />
          </UFormField>
        </UForm>
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script setup>
const value = ref(50)
const value2 = ref(30)
</script>
