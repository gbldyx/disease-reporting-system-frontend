<template>
  <el-container direction="vertical" class="w600-center">
    <h2>用户注册</h2>
    <el-form ref="form" :model="form" :rules="rules" label-position="right" label-width="100px">
      <el-form-item label="姓名" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpass">
        <el-input type="password" v-model="form.checkpass" show-password></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex" required>
        <el-radio v-model="form.sex" label="男">男</el-radio>
        <el-radio v-model="form.sex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="手机" prop="telephone" required>
        <el-input
          maxlength="11"
          v-model="form.telephone"
        ></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="qq" required>
        <el-input v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="wechat" required>
        <el-input v-model="form.wechat"></el-input>
      </el-form-item>
      <el-form-item label="学校" prop="college" required>
        <el-input v-model="form.college"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="major" required>
        <el-input v-model="form.major"></el-input>
      </el-form-item>
      <el-form-item label="现居住地" prop="livingCity" required>
        <el-input v-model="form.livingCity"></el-input>
      </el-form-item>
      <el-form-item label="籍贯" prop="hometown" required>
        <el-input v-model="form.hometown"></el-input>
      </el-form-item>
      <el-form-item label="权限" prop="roleName" required>
        <el-radio v-model="form.roleName" label="student">学生</el-radio>
        <el-radio v-model="form.roleName" label="manager">部门负责人</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">确认</el-button>
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
    // 验证密码
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
    // 检查两次密码一致性
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
        userName: '',
        password: '',
        checkpass: '',
        email: '',
        sex: '男',
        telephone: '',
        qq: '',
        wechat: '',
        college: '',
        major: '',
        livingCity: '',
        hometown: '',
        roleName: 'student'
      },
      // 表单验证条件
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 60, message: '用户名长度为 3 至 60 个字符', trigger: 'blur' }
        ],
        password: [
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
    // 提交表单
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 发送注册请求
          this.sendReg()
        } else {
          this.$alert('注册信息填写有误，请检查注册信息！', '注册失败', {
            confirmButtonText: '确定',
            type: 'error'
          })
        }
      })
    },
    onReturn () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    resetForm (formname) {
      this.$refs[formname].resetFields()
    },
    // 发送注册请求
    sendReg () {
      // 删除‘确认密码’项
      delete this.form.checkpass
      // 发送注册请求
      this.$axios.post('/user/register', this.$qs.stringify(this.form))
        .then((res) => {
          if (res.data.success) {
            // 注册成功，返回登录界面
            this.$router.push('/')
          } else {
            this.$alert('注册失败，请稍后重试', '注册失败', {
              confirmButtonText: '确定',
              type: 'error'
            })
          }
        })
        .catch((res) => {
          this.$alert('错误: ' + res.status, '注册失败', {
            confirmButtonText: '确定',
            type: 'error'
          })
        })
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
