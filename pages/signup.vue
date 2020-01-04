<template>
  <main class="bg-bread-grey h-full">
    <div class="container mx-auto px-4 pb-12">
      <header class="p-4 py-8">
        <h2 class="font-bold text-3xl text-center">Sign Up</h2>
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
        <form @submit.prevent="signup">
          <div class="field">
            <TextInput
              v-model.trim="username"
              name="text"
              type="text"
              label="Username"
            />
          </div>
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
          <div class="field">
            <TextInput
              v-model.trim="confirmPassword"
              name="confirm_password"
              type="password"
              label="Confirm Password"
            />
          </div>
          <div class="text-center mt-4 text-gray-600">
            <p class="mb-4">
              By signing up, you agree to Bread's Terms of Use, Privacy Policy
              and Cookie Policy.
            </p>
            <Button
              @click.prevent="login"
              class="w-full"
              variant="secondary"
              size="large"
              >Sign Up</Button
            >
          </div>
        </form>
      </section>
      <div class="max-w-md mx-auto text-center mt-8 text-gray-600">
        <p>
          <nuxt-link to="/login" class="underline"
            >Already got an account?</nuxt-link
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
  layout: 'simple',
  components: {
    TextInput,
    Button
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
      error: ''
    }
  },
  methods: {
    signup() {
      this.$toast.clear()

      if (this.password !== this.confirmPassword) {
        this.$toast.error('Password fields do not match', {
          duration: 2000
        })
      }

      this.$fireAuth
        .createUserWithEmailAndPassword(this.email, this.password)
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
