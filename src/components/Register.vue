<template>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-form ref="form" :model="form" :rules="rules" label-position="right" label-width="120px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpassword">
              <el-input type="password" v-model="form.checkpassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">确认注册</el-button>
              <el-button type="info" @click="onReturn">返回</el-button>
              <el-button @click="resetForm('form')">清除</el-button>
            </el-form-item>
          </el-form>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkpassword !== '') {
          this.$refs.form.validateField('checkpassword')
        }
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        checkpassword: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 60, message: '用户名长度为 3 至 60 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePassword, trigger: 'blur' }
        ],
        checkpassword: [
          { required: true, validator: checkPassword, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onReturn () {
      this.$router.go(-1)
    },
    resetForm (formname) {
      this.$refs[formname].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
