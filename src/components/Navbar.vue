<template>
    <!-- <el-container>
        <img src="../assets/logo.png" alt="vue"/>
        <h1>疾病直报系统</h1>
        <el-link>{{username}}</el-link>
    </el-container> -->
    <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="6">
            <img src="../assets/logo.png" alt="vue"/>
            <h1>疾病直报系统</h1>
        </el-col>
        <el-col :span="6">
            <div class="userinfo">
                <el-link>{{username}}</el-link>
                <i>|</i>
                <el-link>注销</el-link>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      username: 'admin'
    }
  }
}
</script>

<style scoped>
img {
    /* display: inline-block; */
    float: left;
    /* width: 30px; */
    height: 60px;
    padding-right: 10px;
    /* background-image: "../assets/logo.png"; */
}
h1 {
    float: left;
    /* line-height: 60px; */
    font-size: 1.1em;
}
.userinfo {
    float: right;
}
</style>
