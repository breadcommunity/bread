<template>
  <nav class="bg-white">
    <div class="container mx-auto p-4 flex items-center justify-between">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <div>
        <ul class="flex items-center">
          <WriteModal v-if="loggedIn" />
          <template v-if="loggedIn" class="sm:hidden">
            <li>
              <VDropdown transition="slide-up">
                <template slot="trigger">
                  <button>
                    <img
                      class="w-10 h-10 rounded-full flex-no-shrink"
                      src="https://jessesibley.com/assets/static/memoji.bd6740a.b798404f3509569fa21b6787c936804b.jpg"
                    />
                  </button>
                </template>
                <div class="flex items-center px-6 py-4">
                  <img
                    src="https://jessesibley.com/assets/static/memoji.bd6740a.b798404f3509569fa21b6787c936804b.jpg"
                    class="h-10 w-10 rounded-full flex-no-shrink"
                    alt
                  />

                  <div class="ml-4">
                    <p class="font-semibold text-gray-900 leading-none">
                      Jesse Sibley
                    </p>
                    <p>
                      <a
                        href="#"
                        class="text-sm text-gray-600 leading-none hover:underline"
                        >View Profile</a
                      >
                    </p>
                  </div>
                </div>
                <div class="border-t-2 border-gray-200 py-1">
                  <a
                    href="#"
                    class="block px-6 py-3 leading-tight hover:bg-gray-200"
                    >Your Posts</a
                  >
                  <a
                    href="#"
                    class="block px-6 py-3 leading-tight hover:bg-gray-200"
                    >Settings</a
                  >
                </div>
                <div class="border-t-2 border-gray-200 py-1">
                  <button
                    @click="$store.commit('signOut')"
                    class="block w-full px-6 py-3 text-left leading-tight hover:bg-gray-200"
                  >
                    Log out
                  </button>
                </div>
              </VDropdown>
            </li>
          </template>
          <template v-else>
            <li class="desktop-menu-item">
              <nuxt-link to="/login">
                <Button variant="primary">Log In</Button>
              </nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { VDropdown } from 'vuetensils'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import WriteModal from '@/components/WriteModal'

export default {
  components: {
    Logo,
    Button,
    WriteModal,
    VDropdown
  },
  data() {
    return {
      menu: true
    }
  },
  computed: {
    loggedIn() {
      return !!this.$store.state.user
    }
  }
}
</script>

<style>
.vts-dropdown__content {
  transform: translate(-13rem, 0.5rem);
  @apply border-0 w-64 text-left bg-white rounded-lg shadow-lg !important;
}
</style>
