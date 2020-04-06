<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
          <div class="item border-bottom">中国</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  mounted(){
      this.scroll=new Bscroll(this.$refs.wrapper)
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #cccccc;
  }

  &:after {
    border-color: #cccccc;
  }
}

.border-bottom {
  &:before {
    border-color: #cccccc;
  }
}

.list {
  overflow: hidden;
  top: 1.66rem;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;

  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        text-align: center;
        border: 0.02rem solid #cccccc;
        padding: 0.1rem 0;
        border-radius: 0.1rem;
      }
    }
  }
}
</style>