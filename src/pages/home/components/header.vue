<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/游玩/景点
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe695;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:{
    city:String
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  height: 0.86rem;
  color: white;
  background-color: $bgColor;
  line-height: 0.86rem;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      margin-left: 0.2rem;
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background-color: white;
    border-radius: 0.1rem;
    color: gray;
    text-align: left;
    line-height: 0.64rem;
    padding-left: 0.1rem;
  }

  .header-right {
    float: right;
    width: 1.24rem;
    text-align: center;
  }
}
</style>
