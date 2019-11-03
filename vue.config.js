module.exports = {
  publicPath: '/theme/umsichten-2019/dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss"; 
          @import "@/scss/_mixins.scss";
          @import "@/scss/_globals.scss";
          @import "@/scss/_animations.scss";
          @import "@/scss/_typo.scss";
        `
      }
    }
  }
}