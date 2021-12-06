<template>
  <div class="flex">
    <router-link
      v-for="navItem in navList"
      :key="navItem.name"
      class="m-3.5 opacity-70 focus:opacity-100 focus:font-bold"
      :to="navItem.link"
    >
      <span class="border-solid border-b border-opacity-30">
        {{ navItem.name }}
      </span>
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
