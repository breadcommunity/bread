<template>
  <a :href="url" target="_blank">
    <span class="inline-flex items-center text-sm underline text-blue-700 ml-2"
      ><LinkIcon size="1x" class="mr-1" />{{ domain }}</span
    >
  </a>
</template>

<script>
import { LinkIcon } from 'vue-feather-icons'

export default {
  components: {
    LinkIcon
  },
  props: {
    url: {
      type: String,
      default: null
    }
  },
  computed: {
    domain() {
      const parts = this.url.split('/').filter((part) => part.trim())
      return parts[1]
    }
  }
}
</script>
