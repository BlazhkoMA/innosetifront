<template>
  <el-dialog
      :title="'Movie info ' + dialogMovieId"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
  >
    <el-container
        v-loading="loading"
    >
      <h2 v-if="error">Произошла ошибка</h2>
      <el-card v-if="movie" :body-style="{ padding: '0px' }">
        <img :src="movie.image" class="image">
        <div style="padding: 14px;">
          <span>{{movie.title}}</span>
        </div>
      </el-card>
    </el-container>
  </el-dialog>
</template>
<style>
.image{
  max-width: 100%;
}
</style>
<script>
  import {getMovieFromID} from "../api/omdbApi";

  export default {
    data() {
      return {
        loading: true,
        dialogVisible: true,
        error: false,
        movie: null,
      }
    },
    computed: {
      dialogVisible() {
        return !!this.$store.state.dialogVisible
      },
      dialogMovieId() {
        return this.$store.state.dialogMovieId
      }
    },
    async mounted() {
      if(this.dialogMovieId){
        this.movie = await getMovieFromID(this.dialogMovieId)
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