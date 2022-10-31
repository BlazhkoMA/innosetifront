/* eslint-disable */
<template>
  <div class="page">
    <h2>{{pageName}}</h2>
    <h3>Переходов по меню {{transitionCount}}</h3>
  </div>
</template>
<style scoped>
.page{
  display: flex;
  flex-direction: column;
  padding: 30px;
}
.page h2{
  margin-bottom: 20px;
}
</style>
<script>
import menu from "../../options/menu";

export default {
  computed: {
    transitionCount() {
      return this.$store.getters.getTransitionCount;
    },
    pageName() {
      const menuItemIndex = menu.findIndex(item => item.name === this.$route.name)
      if(menuItemIndex !== -1){
        return menu[menuItemIndex].title
      } else {
        return'неопознанная страница'
      }
    }
  }
}
</script>