<template>
    <el-row>
      <el-row>
          <el-collapse>
              <el-collapse-item title="查询条件">
                  <el-form>
                    <el-form-item>
                      <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button>查询</el-button>
                    </el-form-item>
                  </el-form>
              </el-collapse-item>
          </el-collapse>
      </el-row>
      <el-row>
          <el-table stripe :data="result">
            <el-table-column label="日期" prop="date"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="现居住地" prop="address"></el-table-column>
            <el-table-column label="健康状况" prop="status"></el-table-column>
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
      result: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: '无异常'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        status: '无异常'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        status: '无异常'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        status: '无异常'
      }]
    }
  }
}
</script>

<style scoped>

</style>
