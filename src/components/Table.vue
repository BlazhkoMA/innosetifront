<template>
  <el-table
      @row-click="openModal"
      :data="users"
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
<style>
.el-table__row{
  cursor: pointer;
}
</style>
<script>

export default {
  data() {
    return {
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
      this.$store.dispatch('openModal', row.id)
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
  }
}
</script>