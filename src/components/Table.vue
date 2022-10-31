<template>
  <el-table
      @row-click="openModal"
      :data="tableData"
      v-loading="loading"
  >
    <el-table-column
        :prop="col.prop"
        :label="col.label"
        :width="col.width"
        :key="col.id"
        v-for="col in tableStructure"
    />
  </el-table>
</template>
<script>

import {getUsers} from "../api/usersApi";

export default {

  data() {
    return {
      tableData: [],
      loading: true,
      tableStructure: [
        {
          id: 1,
          prop: 'id',
          label: 'ID',
          width: '70'
        },
        {
          id: 2,
          prop: 'name',
          label: 'Name',
          width: null
        },
        {
          id: 3,
          prop: 'email',
          label: 'Email',
          width: '240'
        },
        {
          id: 4,
          prop: 'phone',
          label: 'Phone',
          width: '240'
        },
      ]
    }
  },
  methods: {
    openModal(row){
      this.$store.commit('openModal', row.id)
    }
  },
  async mounted() {
    this.tableData = await getUsers();
    this.loading = false
  }
}
</script>