<template>
  <div id="app">

    <Navigation :items="navItems"></Navigation>

    <transition>
      <routerView></routerView>
    </transition>

    <Loading :isLoading="isLoading" />

  </div>
</template>


<script>
import Navigation from '@/components/Navigation'
import Loading from '@/components/Loading'

export default {
  name: 'app',
  components: {
    Navigation,
    Loading,
  },
  created () {
    console.log('# App created');

  },
  mounted() {
    console.log(process.env);
  },
  data() {
    return {
      isLoading: this.$store.state.isLoading,
      navItems: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'foo',
          path: '/foo'
        },
      ],
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
