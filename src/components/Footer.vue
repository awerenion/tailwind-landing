<template>
  <div class="h-128 flex justify-between items-center border-solid border-t border-white border-opacity-10 px-28">
    <div>
      <div class="pl-4">
        © Highly, All Rights Reserved
      </div>
      <Navigation
        :nav-list="navList"
      />
    </div>
    <div class="flex items-center">
      <img
        class="mr-4"
        src="@/assets/Facebook.svg"
        alt="Facebook"
      >
      <img
        class="mr-4"
        src="@/assets/Twitter.svg"
        alt="Twitter"
      >
      <img
        src="@/assets/Linkedin.svg"
        alt="Linkedin"
      >
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation
  },
  data () {
    return {
      navList: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Our Technology', link: '/' },
        { name: 'Contact', link: '/' },
        { name: 'Privacy and Policy', link: '/' },
        { name: 'Terms and Condition', link: '/' },
        { name: 'FAQ', link: '/' }
      ]
    }
  }
}
</script>
