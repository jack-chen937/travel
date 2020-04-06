<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
.header {
  font-size: 0.32rem;
  height: 0.86rem;
  line-height: 0.86rem;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: lightgreen;
}

.back-icon {
  float: left;
  color: white;
  margin-left: 0.2rem;
  text-align: center;
  font-size: 0.4rem;
}
</style>
