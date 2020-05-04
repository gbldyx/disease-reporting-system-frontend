<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container>
      <el-header>
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="6">
              <img src="./assets/logo.png" alt="vue"/>
              <h1>疾病直报系统</h1>
          </el-col>
          <el-col :span="6">
              <div class="userstate">
                  <el-link>{{$store.state.username}}</el-link>
                  <i>|</i>
                  <el-link href="/">注销</el-link>
              </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
img {
    float: left;
    height: 60px;
    margin-right: 10px;
}
h1 {
    float: left;
    font-size: 1.1em;
}
.userstate {
    float: right;
}
.el-header {
  border-bottom: 1px #bbb solid;
}
</style>
