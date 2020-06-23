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
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
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
    // 检查邮箱输入
    var checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        callback()
      }
    }
    // 检查密码输入
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      form: {
        email: '',
        pass: ''
      },
      rules: {
        email: [
          { validator: checkName, trigger: 'blur' }
        ],
        pass: [
          { validator: checkPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 提交登录表单
    submit () {
      // 验证表单
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 发送请求至 /login
          this.sendLogin()
        } else {
          this.$alert('登录信息填写有误，请检查登录信息！', '登录失败', {
            confirmButtonText: '确定',
            type: 'error'
          })
        }
      })
    },
    // 转至注册界面
    register () {
      this.$router.push({ path: '/register' })
    },
    // 发送请求
    sendLogin () {
      this.$axios.post('/login', this.$qs.stringify({ username: this.form.email, password: this.form.pass }))
        .then((res) => {
          if (res.data.success) {
            // 登录成功
            var d = res.data.data
            var id = d.userId
            var role = d.roleName
            var username
            // 获取用户姓名，用于显示在右上角
            this.$axios.get('/user/selectOne', { params: { id: id } })
              .then(res => {
                username = res.data.data.userName
                // 存入vuex
                this.$store.commit('setuser', {
                  username: username,
                  rolename: role,
                  userid: id
                })
                this.$store.commit('changeLogin', true)
                // 转到主页面
                this.$router.push({ path: '/mainpage' })
              })
          } else {
            this.$alert('登录失败：' + res.data.message, '登录失败', {
              confirmButtonText: '确定',
              type: 'error'
            })
          }
        })
        .catch((res) => {
          this.$alert('错误：' + res.status, '登录失败', {
            confirmButtonText: '确定',
            type: 'error'
          })
        })
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
