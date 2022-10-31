/* eslint-disable */
<template>
  <el-main>
    <Table/>
    <ModalUser v-if="dialogVisible && dialogUserId"/>
  </el-main>
</template>
<style>
  .el-table__row{
    cursor: pointer;
  }
</style>
<script>
import ModalUser from "../components/ModalUser";
import Table from "../components/Table";

export default {
  components: {ModalUser, Table},
  computed: {
    dialogVisible() {
      return this.$store.state.dialogVisible
    },
    dialogUserId() {
      return this.$store.state.dialogUserId
    }
  },
};
</script>