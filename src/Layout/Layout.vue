<template>
  <el-container style="min-height: 100vh">
    <el-header>
        <Header/>
    </el-header>
    <el-container>
      <Menu/>
      <slot></slot>
    </el-container>
  </el-container>
</template>
<style>
*{
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
<script>
import Menu from "../components/Menu";
import Header from "./Header";
export default {
  components: {Menu, Header},
}
</script>