<template>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="案例编号">
    </el-table-column>
    <el-table-column
      label="填报时间">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="myPhysicalCondition"
      label="健康状况">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'PersonalCase',
  data () {
    return {
      tableData: []
    }
  },
  created: function () {
    // 用vuex存的个人id查询个人案例
    this.$axios.post('/health/selectByOptionalField', this.$qs.stringify({ userId: this.$store.state.userid }))
      .then(res => {
        if (res.data.success) {
          // 取出原数据要显示在表格的部分
          let result = res.data.data.map(o => {
            return {
              id: o.id,
              createTime: this.$moment(o.createTime).format('YYYY-MM-DD'),
              myPhysicalCondition: o.myPhysicalCondition
            }
          })
          this.tableData = result
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

</style>
