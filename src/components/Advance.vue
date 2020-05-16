<template>
    <el-tabs type="border-card">
      <el-tab-pane label="查询">
        <query></query>
      </el-tab-pane>
      <el-tab-pane label="统计">2</el-tab-pane>
      <el-tab-pane label="图表">
        <visualization></visualization>
      </el-tab-pane>
    </el-tabs>
</template>

<script>
import visualization from './Visualization'
import query from './Query'
export default {
  name: 'Advance',
  components: {
    visualization,
    query
  }
}
</script>

<style scoped>

</style>
