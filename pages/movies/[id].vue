<script setup>
const route = useRoute()
const { data } = await useFetch(`http://www.omdbapi.com/?apikey=f1790ff4&i=${route.params.id}`, {
  pick: ['Title', 'Plot', 'Poster', 'Error']
})

if (data.value.Error === 'Incorrect IMDb ID.') {
  showError({ statusCode: 404, statusMessage: 'Page not Found' })
}

useHead({
  title: data.value.Title,
  meta: [
    { name: 'description', content: data.value.Plot },
    { property: 'og:description', content: data.value.Plot },
    { property: 'og:image', content: data.value.Poster },
    { name: 'twitter:card', content: `summary_large_image` },
  ]
})
</script>

<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
