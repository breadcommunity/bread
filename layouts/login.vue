<template>
  <div>
    <nav class="bg-white">
      <div
        class="container mx-auto p-4 flex flex-row items-center justify-between"
      >
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
        <nuxt-link to="/signup" class="underline">
          <Button>Sign Up</Button>
        </nuxt-link>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Button from '@/components/Button'

export default {
  components: {
    Logo,
    Button
  }
}
</script>
