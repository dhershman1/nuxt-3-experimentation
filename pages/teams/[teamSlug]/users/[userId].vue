<script setup>
const route = useRoute()
const message = computed(() => {
  return `I'm on team ${route.params.teamSlug} and my user id is ${route.params.userId}`
})
</script>

<template>
  <h1>
    {{ message }}
  </h1>
</template>
