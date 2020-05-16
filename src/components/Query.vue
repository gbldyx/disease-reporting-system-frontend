<template>
    <el-row>
      <el-row>
          <el-collapse>
              <el-collapse-item title="查询条件">
                  <div>条件1</div>
              </el-collapse-item>
          </el-collapse>
      </el-row>
      <el-row>
          <div>表格</div>
      </el-row>
    </el-row>
</template>

<script>
export default {
  name: 'query',
  data () {
    return {
      id: 1
    }
  }
}
</script>

<style scoped>

</style>
