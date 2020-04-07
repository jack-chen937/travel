<template>
  <div class="banner">
    <router-link to="/" class="iconfont back-icon" v-show="header">&#xe656;</router-link>

    <div class="header" v-show="!header" :style="opacityStyle">
      <router-link class="header-left" to="/">
        <span class="iconfont back">&#xe624;</span>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "detailHeader",
  data() {
    return {
      header: true,
      opacityStyle() {
        opacity: 0;
      }
    };
  },
  methods: {
    handleScoll() {
      const top = document.documentElement.scrollTop;
      //   console.log(top);
      if (top > 43) {
        let op = top / 204;
        op = op > 1 ? 1 : op;
        console.log(op);
        this.opacityStyle = {
          opacity: op
        };
        this.header = false;
      } else {
        this.header = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScoll);
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.banner {
  height: 50rem;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.86rem;
  background-color: $bgColor;
  color: white;
  line-height: 0.86rem;
  text-align: center;
}

.back-icon {
  line-height: 0.72rem;
  text-align: center;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  border-radius: 0.72rem;
  height: 0.72rem;
  width: 0.72rem;
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.2);
}

.header-left {
  width: 0.64rem;
  float: left;

  .back {
    color: #fff;
    margin-left: 0.2rem;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>
