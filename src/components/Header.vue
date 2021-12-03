<template>
  <div class="h-82 flex justify-between items-center mb-20">
    <img
      src="../assets/Logo.svg"
      alt="highly"
    >
    <Navigation
      :nav-list="navList"
    />
    <div class="flex justify-center items-center">
      <basic-button>
        <img
          src="../assets/flag.png"
          alt="Britain"
          class="mr-2"
        >
        <span class="font-bold">EN</span>
      </basic-button>
      <basic-button class="bg-blue-some">
        <span class="mr-2 font-bold">Login</span>
        <img
          src="../assets/Arrow.png"
          alt="Arrow"
        >
      </basic-button>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import BasicButton from './BasicButton.vue'

export default {
  name: 'Header',
  components: {
    Navigation,
    BasicButton
  },
  data () {
    return {
      navList: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Our Technology', link: '/' },
        { name: 'Contact', link: '/' }
      ]
    }
  }
}
</script>
