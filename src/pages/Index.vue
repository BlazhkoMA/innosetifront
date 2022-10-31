/* eslint-disable */
<template>
  <el-main>
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
    <ModalMovie v-if="dialogVisible && dialogMovieId"/>
  </el-main>
</template>
<style>
  .el-table__row{
    cursor: pointer;
  }
</style>
<script>
import {getMovies} from "../api/omdbApi";
import ModalMovie from "../components/ModalMovie";

export default {
  components: {ModalMovie},
  data() {
    return {
      tableData: [],
      loading: true,
      tableStructure: [
        {
          id: 1,
          prop: 'rank',
          label: 'Rank',
          width: '70'
        },
        {
          id: 2,
          prop: 'title',
          label: 'Name',
          width: null
        },
        {
          id: 3,
          prop: 'year',
          label: 'Year',
          width: '120'
        },
        {
          id: 4,
          prop: 'imDbRating',
          label: 'IMDB Rating',
          width: '120'
        },
      ]
    }
  },
  methods: {
    openModal(row){
      this.$store.commit('openModal', row.id)
    }
  },
  computed: {
    dialogVisible() {
      return this.$store.state.dialogVisible
    },
    dialogMovieId() {
      return this.$store.state.dialogMovieId
    }
  },
  async mounted() {
    this.tableData = await getMovies();
    this.loading = false
  }

};
</script>