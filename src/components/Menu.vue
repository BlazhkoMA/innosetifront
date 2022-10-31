<template>
  <el-menu
      class="el-menu-vertical-demo"
      :collapse="!isMenuOpen"
      :default-active="defaultActiveMenu"
  >
    <el-menu-item :key="item.name" :index="item.name" v-for="item in menu" @click="goTo(item.name)">
      <i v-if="item.icon" :class="item.icon"></i>
      <div class="custom-text-icon" v-else>{{item.title[0]}}</div>
      <span>{{item.title}}</span>
    </el-menu-item>
  </el-menu>
</template>
<style>
.el-menu-vertical-demo {
  width: 64px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.custom-text-icon{
  width: 24px;
  margin-right: 5px;
  display: inline-block;
  text-align: center;
  font-weight: 700;
}
</style>
<script>
import menu from "../../options/menu";
import router from "../router";
export default {
  data() {
    return {
      menu: menu,
      defaultActiveMenu: null,
    }
  },
  mounted() {
    const menuItemIndex = this.menu.findIndex(item => item.name === this.$route.name)
    if(menuItemIndex !== -1){
      this.defaultActiveMenu = menu[menuItemIndex].name
    }
  },
  computed: {
    isMenuOpen() {
      return this.$store.getters.getIsMenuOpen;
    },
  },
  methods: {
    goTo(route){
      if(this.$route.name !== route){
        this.$store.dispatch('increaseTransition')
        router.push({name: route})
      }
    },
  },
}
</script>