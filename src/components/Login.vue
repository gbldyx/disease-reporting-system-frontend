<template>
  <el-container class="w600-center">
    <el-header>
      <h2>系统登录</h2>
    </el-header>
    <el-container>
      <el-row>
        <el-col :span="8">
          <img src="../assets/logo.png"/>
        </el-col>
        <el-col :span="16">
          <el-form ref="form" :model="form" :rules="rules" label-position="right" label-width="100px">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="form.pass" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit">登录</el-button>
              <el-button type="info" @click="register">注册</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    var checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        pass: [
          { validator: checkPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // TODO: 在此提交登录信息
          console.log(this.form.name, this.form.pass)
          var t = this.form.name + this.form.pass
          this.$store.commit('setuser', {
            username: this.form.name,
            token: t
          })
          this.$store.commit('changeLogin', true)
          this.$router.push({ path: '/mainpage' })
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    register () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style scoped>
.el-form {
  margin: 10px;
  text-align: center;
}
h2 {
  text-align: center;
}
img {
  height: 100%;
}
.w600-center {
  margin: 0 auto;
  width: 600px;
}
</style>
