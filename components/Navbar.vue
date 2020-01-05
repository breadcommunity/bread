<template>
  <nav class="bg-white">
    <div class="container mx-auto p-4 flex items-center justify-between">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <div>
        <ul class="flex items-center">
          <nuxt-link v-if="loggedIn" to="/">
            <Button class="mr-4">Write a Post</Button>
          </nuxt-link>
          <template v-if="loggedIn" class="sm:hidden">
            <li>
              <img
                class="w-10 h-10 rounded-full"
                src="https://jessesibley.com/assets/static/memoji.bd6740a.b798404f3509569fa21b6787c936804b.jpg"
              />
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
    <VModal v-model="menu" bg-transition="fade">
      <button @click="menu = false" class="close">
        <XIcon size="1.5x" />
      </button>
      <nav class="mt-4">
        <ul>
          <li class="menu-item">
            <nuxt-link to="/signup">
              <Button variant="primary" class="w-full">Sign Up</Button>
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/login">
              <Button class="w-full">Log In</Button>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </VModal>
  </nav>
</template>

<script>
import { VModal } from 'vuetensils'
import { XIcon } from 'vue-feather-icons'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

export default {
  components: {
    Logo,
    VModal,
    XIcon,
    Button
  },
  data() {
    return {
      menu: false
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
.slide-up-enter-active,
.slide-up-leave-active {
  transform: translateY(0);
  transition: opacity 0.2s, transform 0.2s;
}

.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.vts-modal {
  background: rgba(0, 0, 0, 0.7);
}

.vts-modal__content {
  transition: transform 0.2s;
  @apply relative p-4 w-4/5 rounded-lg;
}

.fade-enter .vts-modal__content,
.fade-leave-active .vts-modal__content {
  transform: translateY(20px);
}

.vts-modal__content .close {
  @apply rounded-full absolute top-0 right-0 mt-1 mr-1 border-none p-1;
}

.menu-item {
  @apply px-2 py-1 font-medium text-lg;
}

.desktop-menu-item {
  @apply mr-8;
}

.desktop-menu-item:last-of-type {
  @apply mr-0;
}
</style>
