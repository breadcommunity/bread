<template>
  <div>
    <button @click="open = true" class="mr-4 p-2 rounded-full bg-bread-grey">
      <EditIcon />
    </button>
    <VModal v-model="open" class="modal" bg-transition="fade">
      <div class="container mx-auto">
        <button @click="open = false" class="close">
          <XIcon size="1.5x" />
        </button>
        <header class="py-2">
          <h2 class="text-2xl">New Post</h2>
        </header>
        <section class="my-4">
          <form @submit.prevent>
            <div class="field">
              <TextInput name="title" type="text" label="Title" />
            </div>
            <div class="field">
              <TextInput
                name="content"
                type="textarea"
                label="Content"
                class="h-full"
              />
            </div>
            <div class="field">
              <Button variant="primary" class="px-12">Post</Button>
            </div>
          </form>
        </section>
      </div>
    </VModal>
  </div>
</template>

<script>
import { VModal } from 'vuetensils'
import { EditIcon, XIcon } from 'vue-feather-icons'
import TextInput from '@/components/Form/TextInput'
import Button from '@/components/Button'

export default {
  components: {
    VModal,
    XIcon,
    EditIcon,
    TextInput,
    Button
  },
  data() {
    return {
      open: false
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

.modal .vts-modal__content {
  transition: transform 0.2s;
  @apply relative p-4 w-4/5 max-w-xl rounded-lg;
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
</style>
