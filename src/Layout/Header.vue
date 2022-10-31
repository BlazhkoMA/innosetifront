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
      <div>
        <el-button type="danger" round @click="clearTransfers">Очистить счетчик</el-button>
        <span class="header_title">Инносети, Тестовое задание Frontend</span>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: this.$store.state.menuOpen
    }
  },
  methods: {
    clearTransfers(){
      this.$store.commit('clearTransfers')
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
.header_title{
  margin-left: 20px;
  font-size: 18px;
}
.el-header {
  background-color: whitesmoke;
  color: #333;
  line-height: 60px;
}
</style>