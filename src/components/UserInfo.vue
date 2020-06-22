<template>
  <el-row>
    <el-form
      ref="form"
      :model="form"
      label-width="200px"
      :disabled="uneditable"
      class="w800"
    >
      <el-form-item label="姓名" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio v-model="form.sex" label="男">男</el-radio>
        <el-radio v-model="form.sex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="telephone">
        <el-input
          maxlength="11"
          v-model="form.telephone"
        ></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="qq">
        <el-input v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="wechat">
        <el-input v-model="form.wechat"></el-input>
      </el-form-item>
      <el-form-item label="学校" prop="college">
        <el-input v-model="form.college"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <el-input v-model="form.major"></el-input>
      </el-form-item>
      <el-form-item label="现居住地" prop="livingCity">
        <el-input v-model="form.livingCity"></el-input>
      </el-form-item>
      <el-form-item label="籍贯" prop="hometown">
        <el-input v-model="form.hometown"></el-input>
      </el-form-item>
      <el-form-item v-if="!uneditable">
        <el-button @click="save">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      @click="edit"
      v-if="uneditable"
      style="margin-left: 200px"
      >修改</el-button
    >
  </el-row>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      form: {
        userName: '',
        email: '',
        sex: '男',
        telephone: '',
        qq: '',
        wechat: '',
        college: '',
        major: '',
        livingCity: '',
        hometown: ''
      },
      uneditable: true
    }
  },
  methods: {
    edit () {
      this.uneditable = false
    },
    save () {
      this.form.id = this.$store.state.userid
      this.$axios.put('/user/update', this.$qs.stringify(this.form))
        .then((res) => {
          if (res.data.success) {
            this.$alert('修改成功！', '', {
              confirmButtonText: '确定',
              type: 'success'
            })
            this.uneditable = true
          } else {
            this.$alert('修改失败，请稍后重试', '', {
              confirmButtonText: '确定',
              type: 'error'
            })
            this.uneditable = false
          }
        })
    },
    cancel () {
      this.$axios.get('/user/selectOne', { params: { id: this.$store.state.userid } })
        .then((res) => {
          if (res.data.success) {
            for (var prop in this.form) {
              this.form[prop] = res.data.data[prop]
            }
          } else {
            console.log(res)
          }
        })
      this.uneditable = true
    }
  },
  created: function () {
    this.$axios.get('/user/selectOne', { params: { id: this.$store.state.userid } })
      .then((res) => {
        if (res.data.success) {
          for (var prop in this.form) {
            this.form[prop] = res.data.data[prop]
          }
        } else {
          this.$alert('加载失败，请重试', '加载失败', {
            confirmButtonText: '确定',
            type: 'error'
          })
        }
      })
  }
}
</script>

<style scoped>
.w800 {
  width: 800px;
}
</style>
