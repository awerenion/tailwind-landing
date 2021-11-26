<template>
  <div class="flex flex-col text-white max-w-580">
    <span class="text-xl font-bold h-216 mt-14 mb-2">Optimize your performance management</span>
    <span class="opacity-70 text-2xl mb-14 font-light mt-4">Highly is a one stop solution for managing the financial affairs, effectively.</span>
    <basic-button class="bg-blue-some w-183 mb-32">
      <span class="mr-2 font-bold">Get Started</span>
      <img
        src="../assets/Arrow.png"
        alt="Arrow"
      >
    </basic-button>
  </div>
</template>

<script>
import BasicButton from './BasicButton.vue'

export default {
  name: 'MainTitle',
  components: {
    BasicButton
  }
}
</script>
