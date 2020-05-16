<template>
  <el-row>
      <img :src="imgsrc"/>
  </el-row>
</template>

<script>
import logo from '../assets/logo.png'
export default {
  name: 'visualization',
  data () {
    return {
      imgsrc: logo
    }
  }
}
</script>

<style scoped>

</style>
