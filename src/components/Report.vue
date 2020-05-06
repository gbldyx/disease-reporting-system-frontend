<template>
    <el-form ref="form" :model="form" label-width="200px" class="left-align">
      <el-form-item label="个人健康状况">
        <el-input type="textarea" v-model="form.myCond" resize="none"></el-input>
      </el-form-item>
      <el-form-item label="家属健康状况">
        <el-input type="textarea" v-model="form.familyCond" resize="none"></el-input>
      </el-form-item>
      <el-form-item label="是否去过湖北">
        <el-radio v-model="form.hubei" :label="true">是</el-radio>
        <el-radio v-model="form.hubei" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="是否去过境外">
        <el-radio v-model="form.abroad" :label="true">是</el-radio>
        <el-radio v-model="form.abroad" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="foreign relatives">
        <el-radio v-model="form.foreignRelative" :label="true">是</el-radio>
        <el-radio v-model="form.foreignRelative" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="是否接触过病例">
        <el-radio v-model="form.contactCase" :label="true">是</el-radio>
        <el-radio v-model="form.contactCase" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="是否接触过外国人">
        <el-radio v-model="form.contactFrnr" :label="true">是</el-radio>
        <el-radio v-model="form.contactFrnr" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      form: {
        myCond: '',
        familyCond: '',
        hubei: false,
        abroad: false,
        foreignRelative: false,
        contactCase: false,
        contactFrnr: false
      }
    }
  }
}
</script>

<style scoped>
.left-align {
  text-align: left;
}
.el-form-item {
  width: 800px;
}
</style>
