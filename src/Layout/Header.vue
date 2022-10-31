<template>
    <div class="header_container">
      <el-switch
          @input="setMenuState"
          :value="isMenuOpen"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Раскрыто"
          inactive-text="Скрыто"
      >
      </el-switch>
      <div>
        <el-button type="danger" round @click="clearTransfers">Очистить счетчик</el-button>
        <span class="header_title">Инносети, Тестовое задание Frontend</span>
      </div>
    </div>
</template>
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
<script>
export default {
  computed: {
    isMenuOpen() {
      return this.$store.getters.getIsMenuOpen;
    }
  },
  methods: {
    setMenuState(newValue) {
      this.$store.dispatch('switchMenuState', newValue)
    },
    clearTransfers(){
      this.$store.dispatch('clearTransition')
    }
  },
}
</script>