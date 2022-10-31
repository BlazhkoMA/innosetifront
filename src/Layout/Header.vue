<template>
    <div class="header_container">
      <el-switch
          v-model="isCollapse"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Expand"
          inactive-text="Collapse"
      >
      </el-switch>
      <span>Инносети, Тестовое задание Frontend</span>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: this.$store.state.menuOpen
    }
  },
  watch: {
    isCollapse(newValue) {
      this.$store.commit('setMenuState', newValue)
    }
  }
}
</script>
<style>
.header_container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-header {
  background-color: whitesmoke;
  color: #333;
  line-height: 60px;
}
</style>