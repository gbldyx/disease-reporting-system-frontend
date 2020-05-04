<template>
    <el-row>
        <el-menu>
            <el-menu-item v-if="isAdmin" index="1"><router-link to="mainpage/personalcase">个人案例</router-link></el-menu-item>
            <el-menu-item index="2">个人信息</el-menu-item>
            <el-menu-item index="3">高级查询</el-menu-item>
        </el-menu>
    </el-row>
</template>

<script>
export default {
  name: 'AsideList',
  data () {
    return {
      isAdmin: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
