<template>
    <!-- <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-form ref="form" :model="form" :rules="rules" label-position="right" label-width="120px">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="form.pass" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpass">
              <el-input type="password" v-model="form.checkpass" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">确认</el-button>
              <el-button type="info" @click="onReturn">返回</el-button>
              <el-button @click="resetForm('form')">清除</el-button>
            </el-form-item>
          </el-form>
      </el-col>
    </el-row> -->
    <el-container direction="vertical" class="w600-center">
      <h2>用户注册</h2>
      <el-form ref="form" :model="form" :rules="rules" label-position="right" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkpass">
          <el-input type="password" v-model="form.checkpass" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">确认</el-button>
          <el-button type="info" @click="onReturn">返回</el-button>
          <el-button @click="resetForm('form')">清除</el-button>
        </el-form-item>
      </el-form>
    </el-container>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkpass !== '') {
          this.$refs.form.validateField('checkpass')
        }
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '',
        pass: '',
        checkpass: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 60, message: '用户名长度为 3 至 60 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePassword, trigger: 'blur' }
        ],
        checkpass: [
          { required: true, validator: checkPassword, trigger: 'blur' }
        ],
        email: [
          { required: true, type: 'email', message: '请输入邮箱地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          alert('Submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
      // this.$router.push({ path: '/login' })
    },
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
.w600-center {
  width: 600px;
  margin: 0 auto;
}
h2 {
  text-align: center;
}
</style>
