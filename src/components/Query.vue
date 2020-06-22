<template>
    <el-row>
      <el-row>
          <el-collapse>
              <el-collapse-item title="查询条件">
                  <el-form ref="form" :model="form">
                    <el-divider content-position="left">相关信息</el-divider>
                    <el-form-item>
                      <el-row :gutter="10">
                        <el-col :span="8">
                          学校：<el-input v-model="form.college"></el-input>
                        </el-col>
                        <el-col :span="8">
                          专业：<el-input v-model="form.major"></el-input>
                        </el-col>
                        <el-col :span="8">
                          居住城市：<el-input v-model="form.livingCity"></el-input>
                        </el-col>
                      </el-row>
                      <el-row :gutter="10">
                        <el-col :span="8">
                          籍贯：<el-input v-model="form.hometown"></el-input>
                        </el-col>
                        <el-col :span="8">
                          <div>性别：</div>
                          <el-select v-model="form.sex"><el-option v-for="sex in ['男', '女']" :key="sex.index" :value="sex"></el-option></el-select>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-divider content-position="left">健康状况</el-divider>
                    <el-form-item>
                      <el-checkbox v-model="form.huBei">去过湖北</el-checkbox>
                      <el-checkbox v-model="form.abroad">出国</el-checkbox>
                      <el-checkbox v-model="form.foreignRelatives">有外国亲戚</el-checkbox>
                      <el-checkbox v-model="form.contactCase">接触过疑似/确诊病例</el-checkbox>
                      <el-checkbox v-model="form.contactForeigner">接触过外国人</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="query">查询</el-button>
                    </el-form-item>
                  </el-form>
              </el-collapse-item>
          </el-collapse>
      </el-row>
      <el-row>
          <el-table stripe :data="result">
            <el-table-column label="案例编号" prop="id"></el-table-column>
            <el-table-column label="姓名" prop="userName"></el-table-column>
            <el-table-column label="现居住地" prop="livingCity"></el-table-column>
            <el-table-column label="健康状况" prop="myPhysicalCondition"></el-table-column>
            <!-- <el-table-column></el-table-column> -->
          </el-table>
      </el-row>
    </el-row>
</template>

<script>
export default {
  name: 'query',
  data () {
    return {
      form: {
        college: '',
        major: '',
        livingCity: '',
        hometown: '',
        sex: '',
        huBei: false,
        abroad: false,
        foreignRelatives: false,
        contactCase: false,
        contactForeigner: false
      },
      result: []
    }
  },
  methods: {
    query () {
      var userParamNames = ['college', 'major', 'livingCity', 'hometown', 'sex']
      var healthParamNames = ['huBei', 'abroad', 'foreignRelatives', 'contactCase', 'contactForeigner']
      var userParams = {}
      var healthParams = {}
      var i
      for (i = 0; i < userParamNames.length; i++) {
        let name = userParamNames[i]
        if (this.form[name]) {
          userParams[name] = this.form[name]
        }
      }
      for (i = 0; i < healthParamNames.length; i++) {
        let name = healthParamNames[i]
        if (this.form[name]) {
          healthParams[name] = this.form[name]
        }
      }
      userParams = this.$qs.stringify(userParams)
      var userIds = []
      var userNames = []
      var livingCities = []
      if (userParams) {
        this.$axios.post('/user/selectByOptionalField', userParams)
          .then(res => {
            if (res.data.success) {
              userIds = res.data.data.map(o => o.id)
              userNames = res.data.data.map(o => o.userName)
              livingCities = res.data.data.map(o => o.livingCity)
              if (userIds.length !== 0) {
                let hp = this.$qs.stringify(healthParams)
                let result = []
                if (hp === '{}') {
                  healthParams = userIds.map(id => { return this.$qs.stringify({ userId: id }) })
                } else {
                  healthParams = userIds.map(id => {
                    let h = { userId: id }
                    for (let prop in healthParams) {
                      h[prop] = healthParams[prop]
                    }
                    return this.$qs.stringify(h)
                  })
                }
                for (let i = 0; i < healthParams.length; i++) {
                  this.$axios.post('/health/selectByOptionalField', healthParams[i])
                    .then(res => {
                      if (res.data.success) {
                        var conds = res.data.data.map(o => {
                          return {
                            cond: o.myPhysicalCondition,
                            id: o.id
                          }
                        })
                        let usercase = conds.map(c => {
                          return {
                            myPhysicalCondition: c.cond,
                            id: c.id,
                            userName: userNames[i],
                            livingCity: livingCities[i]
                          }
                        })
                        result = result.concat(usercase)
                        this.result = result
                      } else {
                        console.log(res)
                      }
                    })
                }
              } else {
                console.log(res)
              }
            } else {
              console.log(res)
            }
          })
      } else {
        this.$alert('请至少输入一个相关属性条件！', '查询失败', {
          confirmButtonText: '确定',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
