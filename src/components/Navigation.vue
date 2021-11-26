<template>
  <div class="text-white underline absolute left-80 top-auto flex ">
    <router-link
      v-for="navItem in navList"
      :key="navItem.name"
      class="m-4 opacity-70 focus:opacity-100 focus:font-bold"
      :to="navItem.link"
    >
      {{ navItem.name }}
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  props: {
    navList: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
