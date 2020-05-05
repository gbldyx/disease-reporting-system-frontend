<template>
  <el-container>
    <el-aside width="300px">
      <el-row>
        <el-menu
          router
          unique-opened
          default-active="/mainpage/userinfo">
            <el-menu-item index="/mainpage/userinfo">个人信息</el-menu-item>
            <el-menu-item index="/mainpage/report" v-if="canReport">案例录入</el-menu-item>
            <el-menu-item index="/mainpage/personalcase" v-if="!isPrior">个人案例</el-menu-item>
            <el-menu-item index="/mainpage/query" v-if="isPrior">高级查询</el-menu-item>
        </el-menu>
      </el-row>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isPrior: true,
      canReport: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
  /* margin-bottom: 40px; */
  text-align: center;
  /* height: 800px; */
}
.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  /* line-height: 160px; */
}
</style>
