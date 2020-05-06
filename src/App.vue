<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container>
      <el-header>
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="4">
              <img src="./assets/logo.png" alt="vue"/>
              <h1 class="hidden-md-and-down">疾病直报系统</h1>
          </el-col>
          <el-col :span="4">
              <div v-if="$store.state.isLogin" class="userstate">
                {{$store.state.username}}
                  <i>|</i>
                <el-button type="text" @click="logout">注销</el-button>
              </div>
              <div v-else class="userstate">
                未登录
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
  },
  methods: {
    logout () {
      this.$store.commit('changeLogin', false)
      this.$router.replace({ path: '/' })
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
  /* background-color: #eee; */
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
    font-size: 14px;
}
.el-header {
  border-bottom: 1px #bbb solid;
}
</style>
