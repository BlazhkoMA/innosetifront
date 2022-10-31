<template>
  <el-dialog
      :title="'User info ' + dialogUserId"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
  >
    <el-container
        v-loading="loading"
    >
      <h2 v-if="error">Произошла ошибка</h2>
      <div class="modal_content">
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
<style>
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
  import {getUser} from "../api/usersApi";

  export default {
    data() {
      return {
        loading: true,
        dialogVisible: true,
        error: false,
        user: null,
      }
    },
    computed: {
      dialogVisible() {
        return !!this.$store.state.dialogVisible
      },
      dialogUserId() {
        return this.$store.state.dialogUserId
      }
    },
    async mounted() {
      if(this.dialogUserId){
        this.user = await getUser(this.dialogUserId)
        this.loading = false
      } else {
        this.loading = false
        this.error = true
      }
    },
    methods: {
      handleClose() {
        this.$store.commit('closeModal')
      }
    }
  }
</script>