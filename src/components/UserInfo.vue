<template>
    <el-row>
      <el-col>
        <el-form ref="form" :model="form" label-width="200px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="QQ">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="学校">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="所在城市">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-form>
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
        username: '',
        email: ''
      }
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 500px;
}
.el-form-item {
  text-align: left;
}
</style>
