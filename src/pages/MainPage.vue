<template>
  <div>
    <Header />
    <div class="flex justify-between relative">
      <main-title />
      <img
        src="../assets/Assets.png"
        alt="assetGraph"
        class="mr-1 z-10  absolute right-0"
      >
    </div>
    <div class="flex justify-between items-center">
      <img
        src="../assets/Companies/chase.png"
        alt="chase"
      >
      <img
        src="../assets/Companies/asana.png"
        alt="chase"
      >
      <img
        src="../assets/Companies/google.png"
        alt="chase"
      >
      <img
        class="z-10"
        src="../assets/Companies/buzz.png"
        alt="chase"
      >
      <img
        src="../assets/Companies/wlmart.png"
        alt="chase"
      >
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainTitle from '../components/MainTitle.vue'

export default {
  name: 'MainPage',
  components: {
    Header,
    MainTitle
  }
}
</script>
