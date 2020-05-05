<template>
    <el-row>
      <el-col class="left-align">
        <el-form ref="form" :model="form" label-width="200px" :disabled="uneditable">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio v-model="form.sex" label="m">男</el-radio>
            <el-radio v-model="form.sex" label="f">女</el-radio>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="email" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="telephone">
            <el-input type="number" maxlength="11" v-model="form.telephone"></el-input>
          </el-form-item>
          <el-form-item label="QQ" prop="qq">
            <el-input type="number" v-model="form.qq"></el-input>
          </el-form-item>
          <el-form-item label="微信" prop="wechat">
            <el-input v-model="form.wechat"></el-input>
          </el-form-item>
          <el-form-item label="学校" prop="colleage">
            <el-input v-model="form.colleage"></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="form.major"></el-input>
          </el-form-item>
          <el-form-item label="现居住地" prop="livingcity">
            <el-input v-model="form.livingcity"></el-input>
          </el-form-item>
          <el-form-item label="籍贯" prop="hometown">
            <el-input v-model="form.hometown"></el-input>
          </el-form-item>
          <el-form-item v-if="!uneditable">
            <el-button @click="save">保存</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="edit" v-if="uneditable" style="margin-left: 200px">修改</el-button>
        <!-- <div style="background-color: pink">123</div> -->
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      form: {
        name: '2342',
        email: '42342',
        sex: 'm',
        telephone: '23424',
        qq: '2344',
        wechat: '4234',
        colleage: '4234',
        major: '656546',
        livingcity: '43242',
        hometown: '43535'
      },
      uneditable: true
    }
  },
  methods: {
    edit () {
      this.uneditable = false
    },
    save () {
      this.uneditable = true
    },
    cancel () {
      this.$refs.form.resetFields()
      this.uneditable = true
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 500px;
}
.left-align {
  text-align: left;
}
</style>
