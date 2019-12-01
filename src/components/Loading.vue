<template>
  <transition v-if="isLoading">
  <div class="loading">
    {{ this.$store.state.ready }}

    <div class="mask"></div>
    <div class="content">loading ..</div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    isLoading: Boolean,
    message: String,
  }
}
</script>

<style lang="scss">
.loading, .mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.mask {
  background-color: rgba(255, 255, 255, 0.2);
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
