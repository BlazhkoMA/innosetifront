<template>
  <el-dialog
      :title="'User info'"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
  >
    <el-container >
      <h2 v-if="error">Произошла ошибка</h2>
      <div class="modal_content" v-if="user">
        <div class="modal_content_item">
          <span>{{user.name}}</span>
        </div>
        <div class="modal_content_item">
          <span>Phone: {{user.phone}}</span>
        </div>
        <div class="modal_content_item">
          <span>Email: {{user.email}}</span>
        </div>
        <div class="modal_content_item">
          <span>Username: {{user.username}}</span>
        </div>
        <div class="modal_content_item">
          <span>Address: {{user.address.city + ' ' + user.address.street}}</span>
        </div>
      </div>
    </el-container>
  </el-dialog>
</template>
<style scoped>
  .modal_content{
    display: flex;
    flex-direction: column;
  }
  .modal_content_item{
    margin-bottom: 20px;
  }
  .modal_content_item:last-child{
    margin-bottom: 0px;
  }
</style>
<script>
  export default {
    data() {
      return {
        error: false,
      }
    },
    computed: {
      dialogVisible() {
        return this.$store.getters.getDialogVisible
      },
      user() {
        return this.$store.getters.getUser
      },
    },
    methods: {
      handleClose() {
        this.$store.dispatch('closeModal')
      }
    }
  }
</script>