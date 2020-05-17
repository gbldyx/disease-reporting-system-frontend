<template>
  <el-container>
    <el-aside width="300px">
      <el-menu
        router
        unique-opened
        :default-active="currentPath"
        @select="handleSelect">
          <el-menu-item index="/mainpage/userinfo">个人信息</el-menu-item>
          <el-menu-item index="/mainpage/report" v-if="canReport">案例录入</el-menu-item>
          <el-menu-item index="/mainpage/personalcase" v-if="isPrior">个人案例</el-menu-item>
          <el-menu-item index="/mainpage/advance" v-if="isPrior">高级查询</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      isPrior: true,
      canReport: true
    }
  },
  computed: {
    currentPath: function () {
      return this.$route.path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      console.log(this.$route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
  text-align: center;
}
</style>
