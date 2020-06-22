<template>
    <main>
      <el-button type="success" @click="exportxls" icon="el-icon-download" size="medium" :loading="loading">
          导出为Excel
      </el-button>
      <el-row class="table-title">本日健康状况填报人数统计</el-row>
      <el-table :data="tableData" border stripe style="width:100%">
          <el-table-column prop="label" label="统计项目名称"></el-table-column>
          <el-table-column prop="v" label="统计人数"></el-table-column>
      </el-table>
    </main>
</template>

<script>
export default {
  name: 'statistics',
  data () {
    return {
      loading: false,
      tableData: [
        {
          k: 'totalNum',
          label: '填报总人数',
          v: 0
        },
        {
          k: 'huBei',
          label: '去过湖北',
          v: 0
        },
        {
          k: 'foreignRelatives',
          label: '有外国亲戚',
          v: 0
        },
        {
          k: 'abroad',
          label: '在国外',
          v: 0
        },
        {
          k: 'contactCase',
          label: '接触过疑似/确诊病例',
          v: 0
        },
        {
          k: 'contactForeigner',
          label: '接触外国人',
          v: 0
        },
        {
          k: 'myPhysicalCondition',
          label: '非健康状态',
          v: 0
        }
      ]
    }
  },
  methods: {
    exportxls () {
      this.loading = true
      import('@/vendor/Export2Excel.js').then(excel => {
        const tHeader = ['编号', '统计项目名称', '统计人数']
        const filterVal = ['index', 'label', 'v']
        const list = (this.tableData || []).map((item, key) => {
          return {
            index: key + 1,
            label: item.label,
            v: item.v
          }
        })
        if (list) {
          var data = this.formatJson(filterVal, list)
          excel.export_json_to_excel(tHeader, data, '本日健康状况填报人数统计表')
        } else {
          alert('暂无数据')
        }
        this.loading = false
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  },
  created: function () {
    this.$axios.get('/health/countTodayTotalNum')
      .then(res => {
        if (res.data.success) {
          this.tableData[0].v = res.data.data
        } else {
          console.log(res)
        }
      }).catch(res => {
        console.log(res)
      })
    this.$axios.get('/health/countTodayDangerousNum')
      .then(res => {
        if (res.data.success) {
          for (var i = 1; i < this.tableData.length; i++) {
            this.tableData[i].v = res.data.data[this.tableData[i].k]
          }
        } else {
          console.log(res)
        }
      }).catch(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped>
.table-title {
    font-weight: 700;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
}
</style>
