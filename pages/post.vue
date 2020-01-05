<template>
  <main class="container mx-auto p-4 flex flex-col sm:flex-row">
    <div class="w-full sm:w-2/3 sm:pr-4">
      <article class="bg-white p-4 rounded-lg">
        <header>
          <div class="flex mb-4">
            <div class="pr-4">
              <img
                class="w-10 h-10 rounded-full"
                src="https://jessesibley.com/assets/static/memoji.bd6740a.b798404f3509569fa21b6787c936804b.jpg"
              />
            </div>
            <div class="leading-tight">
              <h2 class="font-medium">Jesse Sibley</h2>
              <p class="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>
          <h1 class="text-3xl font-bold leading-tight mb-4">
            {{ post && post.title }}
          </h1>
          <p>{{ post && post.content }}</p>
        </header>
      </article>
    </div>
    <div class="w-full sm:w-1/3 mt-4 sm:mt-0"></div>
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
