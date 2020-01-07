<template>
  <main class="container mx-auto p-4 flex flex-col sm:flex-row">
    <section class="w-full sm:w-2/3 sm:pr-4">
      <Listing :posts="posts" />
    </section>
    <aside class="hidden w-full sm:w-1/3 mb-4">
      <div class="bg-white rounded-lg p-4">
        <p>
          Welcome to Bread &mdash; the Creative Church Community
          <span role="img" alt="waving hand">👋</span>
        </p>
      </div>
    </aside>
    <Loading v-if="loading" />
  </main>
</template>

<script>
import Listing from '@/components/Listing'
import Loading from '@/components/Loading'

export default {
  components: {
    Listing,
    Loading
  },
  data() {
    return {
      posts: [],
      loading: false
    }
  },
  async created() {
    this.loading = true
    const snapshot = await this.$fireStore
      .collection('posts')
      .orderBy('likes', 'desc')
      .get()
    this.posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    this.loading = false
  }
}
</script>
