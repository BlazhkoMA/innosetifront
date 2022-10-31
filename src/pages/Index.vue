/* eslint-disable */
<template>
  <el-main style="padding: 0">
      <Page/>
      <Table/>
      <ModalUser v-if="dialogVisible"/>
    </el-main>
</template>
<script>
import ModalUser from "../components/ModalUser";
import Table from "../components/Table";
import Page from "./Page";

export default {
  components: {ModalUser, Table, Page},
  computed: {
    dialogVisible() {
      return this.$store.getters.getDialogVisible
    },
  },
};
</script>