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
            <span v-for="tag in post.tags" :key="tag">
              <Tag :label="tag" />
            </span>
            <LinkPreview :url="post.link" v-if="post.link" />
          </div>
        </nuxt-link>
      </li>
    </ol>
  </section>
</template>

<script>
import { HeartIcon } from 'vue-feather-icons'
import LinkPreview from '@/components/LinkPreview'
import Tag from '@/components/Tag'

export default {
  components: {
    HeartIcon,
    LinkPreview,
    Tag
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
