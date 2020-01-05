<template>
  <section class="bg-white rounded-lg p-4">
    <ol v-if="posts">
      <li
        v-for="post in posts"
        :key="post.title"
        class="flex items-center list-item"
      >
        <div
          class="inline-flex flex-col items-center text-gray-700 w-8 text-center mr-4 last:mr-0"
        >
          <HeartIcon size="1.25x" />
          {{ post.likes }}
        </div>
        <nuxt-link :to="`/post?id=${post.id}`">
          <p class="font-medium text-lg">
            {{ post.title }}
          </p>
          <p class="block text-gray-600 text-sm">
            {{ post.content }}
          </p>
          <div class="inline-flex items-center mt-1">
            <span
              class="text-xs font-medium inline-block py-1 px-2 rounded text-pink-600 bg-pink-200 last:mr-0 mr-1"
            >
              Ask Bread
            </span>
            <span
              class="text-xs font-medium inline-block py-1 px-2 rounded text-orange-600 bg-orange-200 last:mr-0 mr-1"
            >
              Meta
            </span>
          </div>
        </nuxt-link>
      </li>
    </ol>
  </section>
</template>

<script>
import { HeartIcon } from 'vue-feather-icons'

export default {
  components: {
    HeartIcon
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.list-item {
  @apply mb-6;
}

.list-item:last-of-type {
  @apply mb-0;
}
</style>
