<template>
  <div class="page">
    <h1>{{ this.$route.params }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
  },
  created () {
    console.log('# page created');
  },
}
</script>

<style scoped>
.page {
  border: 1px solid green;
}
</style>
