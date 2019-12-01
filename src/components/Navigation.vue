<template>
  <nav class="navigation">
    <ul class="navigation-header">
      <li v-for="item in items" :key="item.name">
        <routerLink :to="item.path">{{ item.name }}</routerLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String,
    items: Array,
  }
}
</script>

<style lang="scss">
.navigation {
  
  ul.navigation-header {
    width: 100%;
    list-style: none;
    text-align: right;
    li {
      display: inline-block;
    }
  }
  
}
</style>
