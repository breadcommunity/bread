<template>
  <nav class="bg-white">
    <div
      class="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-between"
    >
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <nuxt-link to="/signup" class="underline">
        Sign Up
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>
