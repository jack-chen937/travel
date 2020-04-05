<template>
  <div class="content">
    <div class="recommed-title">
      <span>
        <img
          class="hot-img"
          src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
          alt
        /> 本周热门榜单
      </span>
    </div>
    <div class="swiper">
      <ul class="swiper-list">
        <li class="swiper-li" v-for="item in recommendList" :key="item.id">
          <img class="swiper-img" :src="item.imgurl" />
          <div class="img-title">{{item.title}}</div>
          <div>
            ￥
            <span class="swiper-price">{{item.price}}</span>起
          </div>
        </li>
        <div class="swiper-pagination" slot="pagination"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRommend",
  props: {
    recommendList: Array
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 3.5rem;
  margin-bottom: 0.1rem;
}

.swiper {
  overflow-y: auto;
  height: 3rem;
}

.recommed-title {
  padding-top: 0.1rem;
  background-color: #f5f5f5;
  height: 0.4rem;
  padding-bottom: 0.1rem;
}

.hot-img {
  height: 0.32rem;
  width: 0.32rem;
}

.recommed-title span {
  font-size: 0.32rem;
  display: inline-block;
  line-height: 0.4rem;
  background-color: #fff;
  height: 0.4rem;
  width: 100%;
}

.swiper-list {
  float: left;
  white-space: nowrap;
  width: 500px;
  overflow: hidden;
  height: 2.8rem;
}

.swiper-li {
  text-align: center;
  display: inline;
  float: left;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
  font-size: 0.28rem;
  height: 2.8rem;
  style: none;
}

.swiper-img {
  height: 2.1rem;
  width: 2.1rem;
}

.img-title {
  margin-top: 0.1rem;
}

.swiper-price {
  color: #ff8300;
}
</style>