<template>
  <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!isCollapse"
  >
    <el-menu-item :key="item.alias" v-for="item in menu" @click="goTo(item.alias)">
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
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.menuOpen
    }
  },
  methods: {
    goTo(route){
      if(this.$route.name !== route){
        this.$store.commit('addTransfers')
        router.push({name: route})
      }
    },
    handleOpen() {
      localStorage.setItem('menuOpen', 'true')
    },
    handleClose() {
      localStorage.setItem('menuOpen', 'false')
    }
  },
}
</script>