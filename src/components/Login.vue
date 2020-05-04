<template>
    <!-- <el-container>
        <el-header><Navbar></Navbar></el-header>
        <el-main>main</el-main>
        <router-link to="mainpage">
            <el-button>To MainPage</el-button>
        </router-link>
    </el-container> -->
  <el-row type="flex" justify="center">
    <el-col :span="8">
      <!-- <router-link to="mainpage">
        <el-button>To MainPage</el-button>
      </router-link> -->
      <h5>系统登录</h5>
      <el-form ref="form" :model="form" label-position="right" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="info">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.commit('edituser', {
        username: this.form.username,
        password: this.form.password
      })
      this.$router.push({ path: '/mainpage' })
    }
  }
}
</script>

<style scoped>
.el-form {
  margin: 10px;
  text-align: center;
}
h5 {
  text-align: center;
}
</style>
