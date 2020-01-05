<template>
  <main class="container mx-auto p-4 flex">
    <div class="w-2/3 pr-4">
      <article class="bg-white p-4 rounded-lg">
        <header>
          <h1 class="text-2xl font-bold">{{ post && post.title }}</h1>
          <p>{{ post && post.content }}</p>
        </header>
      </article>
    </div>
    <div class="w-1/3">
      <aside class="bg-white rounded-lg p-4 flex">
        <div class="pr-4">
          <img
            class="w-12 h-12 rounded-full"
            src="https://jessesibley.com/assets/static/memoji.bd6740a.b798404f3509569fa21b6787c936804b.jpg"
          />
        </div>
        <div class="leading-tight">
          <h2 class="text-xl font-medium">Jesse Sibley</h2>
          <p class="text-sm text-gray-600">Web Developer</p>
        </div>
      </aside>
    </div>
  </main>
</template>

<script>
export default {
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
