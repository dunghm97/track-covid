<template>
  <header class="heading h-18 bg-blue-600 p-4">
    <div class="text-2xl text-center text-white font-bold">
      <font-awesome-icon :icon="['fas', 'viruses']" /> Covid-19 Tracker
    </div>
    <p class="text-base text-center text-white">
      API by
      <a href="https://covid19api.com/" target="_blank" class="text-blue-300"
        >covid19api.com</a
      >
      &
      <a href="https://disease.sh/" target="_blank" class="text-blue-300"
        >disease.sh</a
      >
    </p>
    <div class="link-site text-base text-right text-white">
      <nuxt-link to="/" class="hover:text-red-400">Home</nuxt-link>
      /
      <nuxt-link to="/about" class="hover:text-red-400">About VN</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss">
.link-site {
  a {
    &.nuxt-link-exact-active {
      color: #fbbf24;
      font-weight: bold;
    }
  }
}
</style>
