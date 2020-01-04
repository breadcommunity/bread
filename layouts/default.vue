<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
    <client-only>
      <CookieLaw />
    </client-only>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    CookieLaw,
    Footer
  },
  created() {
    this.$fireAuth.onAuthStateChanged((user) => {
      if (user) {
        const { email, photoURL, displayName } = user
        this.$store.commit('setUser', {
          email,
          photoURL,
          displayName
        })
      }
    })
  }
}
</script>
