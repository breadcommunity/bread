<template>
  <main class="container mx-auto p-4 flex flex-col sm:flex-row">
    <div class="w-full sm:w-2/3 sm:pr-4">
      <article class="bg-white p-8 rounded-lg">
        <header>
          <h1 class="text-3xl font-bold leading-tight mb-4">
            {{ post && post.title }}
          </h1>
        </header>
        <section class="mb-4">
          <p>{{ post && post.content }}</p>
          <div>
            <Tag v-for="tag in post.tags" />
          </div>
        </section>
        <footer class="border-t pt-4">
          <div class="flex items-center">
            <div class="pr-2">
              <img
                class="w-6 h-6 rounded-full"
                src="https://jessesibley.com/assets/static/memoji.bd6740a.b798404f3509569fa21b6787c936804b.jpg"
              />
            </div>
            <div class="leading-tight">
              <h2 class="text-sm">Jesse Sibley</h2>
            </div>
          </div>
        </footer>
      </article>
    </div>
    <div class="w-full sm:w-1/3 mt-4 sm:mt-0"></div>
  </main>
</template>

<script>
import Tag from '@/components/Tag'

export default {
  components: {
    Tag
  },
  data() {
    return {
      post: null
    }
  },
  async asyncData({ app: { $fireStore, $nuxt }, query }) {
    const post = await $fireStore
      .collection('posts')
      .doc(query.id)
      .get()
      .then((doc) => doc.data())
      .catch((error) => {
        return $nuxt.error({ statusCode: 404, message: error.message })
      })

    return {
      post
    }
  },
  watchQuery: ['id']
}
</script>
