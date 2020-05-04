<template>
  <div>
    个人信息
    <p>username: {{this.$store.state.username}}</p>
    <p>password: {{this.$store.state.password}}</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped>

</style>
