<template>
  <div class="container mx-auto p-4">
    <Listing :posts="posts" />
  </div>
</template>

<script>
import Listing from '@/components/Listing'

export default {
  components: {
    Listing
  },
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    return $fireStore.collection('posts').get()
  }
}
</script>
