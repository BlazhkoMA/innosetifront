/* eslint-disable */
<template>
  <div class="page">
    <h2>{{pageName}}</h2>
    <h3>Переходов по меню {{transfer}}</h3>
  </div>
</template>
<style>
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
    transfer() {
      return this.$store.state.transfers
    },
    pageName() {
      const menuItemIndex = menu.findIndex(item => item.alias === this.$route.name)
      if(menuItemIndex !== -1){
        return menu[menuItemIndex].title
      } else {
        return'неопознанная страница'
      }
    }
  }
}
</script>