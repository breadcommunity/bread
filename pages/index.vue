<template>
  <main class="container mx-auto p-4 flex flex-col-reverse sm:flex-row">
    <section class="w-full sm:w-2/3 sm:pr-4">
      <Listing :posts="posts" />
    </section>
    <aside class="w-full sm:w-1/3 mb-4">
      <div class="bg-white rounded-lg p-4">
        <p>
          Welcome to Bread &mdash; the Creative Church Community
          <span role="img" alt="waving hand">👋</span>
        </p>
      </div>
    </aside>
  </main>
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
  async created() {
    const snapshot = await this.$fireStore.collection('posts').get()
    this.posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }
}
</script>
