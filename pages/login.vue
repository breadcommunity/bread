<template>
  <main class="bg-bread-grey h-full">
    <div class="container mx-auto px-4 pb-12">
      <header class="p-4 py-8">
        <h2 class="font-bold text-3xl text-center">Log In</h2>
      </header>
      <div>
        <div
          v-if="error"
          class="max-w-md mx-auto mb-4 bg-red-200 text-red-900 p-4 rounded-lg"
        >
          <p>
            <strong>Whoops!&nbsp;</strong>
            <span>{{ error }}</span>
          </p>
        </div>
      </div>
      <section class="bg-white rounded-lg max-w-md p-4 sm:p-8 mx-auto">
        <form @submit.prevent="login">
          <div class="field">
            <TextInput
              v-model.trim="email"
              name="email"
              type="email"
              label="Email"
            />
          </div>
          <div class="field">
            <TextInput
              v-model.trim="password"
              name="password"
              type="password"
              label="Password"
            />
          </div>
          <div class="text-center mt-4 text-gray-600">
            <Button
              @click.prevent="login"
              class="w-full"
              variant="primary"
              size="large"
              >Log In</Button
            >
          </div>
        </form>
      </section>
      <div class="max-w-md mx-auto text-center mt-8 text-gray-600">
        <p>
          <nuxt-link to="/signup" class="underline"
            >Forgotten your password?</nuxt-link
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import TextInput from '@/components/Form/TextInput'
import Button from '@/components/Button'

export default {
  layout: 'login',
  components: {
    TextInput,
    Button
  },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      this.$toast.clear()
      this.$fireAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(({ user }) => {
          const { email, photoURL, displayName } = user
          this.$toast.clear()
          this.$store.commit('setUser', {
            email,
            photoURL,
            displayName
          })
          this.$router.push('/')
          this.$toast.success('Logged In', {
            duration: 1500
          })
        })
        .catch((error) => {
          this.$toast.error(error.message)
        })
    }
  }
}
</script>

<style>
.field {
  @apply mb-4;
}
</style>
