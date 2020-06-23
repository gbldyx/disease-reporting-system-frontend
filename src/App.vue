<template>
  <div id="app">
    <el-container>
      <el-header class="global-header">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="4">
              <img src="./assets/logo.png" alt="vue"/>
              <h1 class="hidden-md-and-down">疾病直报系统</h1>
          </el-col>
          <!-- 用户登录状态显示栏 -->
          <el-col :span="4">
            <div class="userstate">
              {{$store.state.username}}
              <span v-if="$store.state.isLogin">
                <i>|</i>
                <el-button type="text" @click="logout">注销</el-button>
              </span>
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
    // 注销
    logout () {
      this.$axios.get('/logout')
        .then(res => {
          console.log(res)
        })
      this.$store.commit('reset')
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
    font-size: 14px;
}
.global-header {
  border-bottom: 1px #bbb solid;
}
</style>
