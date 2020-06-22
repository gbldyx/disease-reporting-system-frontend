<template>
    <el-form ref="form" :model="form" label-width="300px" class="left-align w800">
      <el-form-item label="个人健康状况" prop="myPhysicalCondition">
        <el-select v-model="form.myPhysicalCondition">
          <el-option v-for="c in conditions" :key="c.index" :value="c"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="家属健康状况" prop="familyPhysicalCondition">
        <el-select v-model="form.familyPhysicalCondition">
          <el-option v-for="c in conditions" :key="c.index" :value="c"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最近是否去过湖北（一个月内）" prop="huBei">
        <el-radio v-model="form.huBei" :label="true">是</el-radio>
        <el-radio v-model="form.huBei" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="最近是否出国（一个月内）" prop="abroad">
        <el-radio v-model="form.abroad" :label="true">是</el-radio>
        <el-radio v-model="form.abroad" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="是否有外国亲戚" prop="foreignRelatives">
        <el-radio v-model="form.foreignRelatives" :label="true">是</el-radio>
        <el-radio v-model="form.foreignRelatives" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="是否接触过疑似/确诊病例（一个月内）" prop="contactCase">
        <el-radio v-model="form.contactCase" :label="true">是</el-radio>
        <el-radio v-model="form.contactCase" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item label="是否接触过外国人" prop="contactForeigner">
        <el-radio v-model="form.contactForeigner" :label="true">是</el-radio>
        <el-radio v-model="form.contactForeigner" :label="false">否</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      form: {
        userId: this.$store.state.userid,
        myPhysicalCondition: '',
        familyPhysicalCondition: '',
        huBei: false,
        abroad: false,
        foreignRelatives: false,
        contactCase: false,
        contactForeigner: false
      },
      conditions: [
        '正常',
        '出现症状',
        '隔离中',
        '疑似病例',
        '确诊病例'
      ]
    }
  },
  methods: {
    submit () {
      this.$axios.post('/health/insertSelective', this.$qs.stringify(this.form))
        .then((res) => {
          this.$alert('填报成功！', '', {
            confirmButtonText: '确定',
            type: 'success'
          })
        })
    }
  }
}
</script>

<style scoped>
.left-align {
  text-align: left;
}
.w800 {
  width: 800px;
}
</style>
