<script setup>
const user = useUser()
</script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a href="#" v-else @click.prevent="user.isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>
