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
          <div>{{item.title}}</div>
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
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201403/10/b27ead9b352d1ab09e0d86605defcf30.jpg_250x250_165f4014.jpg",
          title: "安抚武功山",
          price: "30"
        },
        {
          id: "0002",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_250x250_ed667de7.jpg",
          title: "婺源",
          price: "60"
        },
        {
          id: "0003",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201305/23/06349f279f6be2d4c8d65eac.jpg_200x200_085bb722.jpg",
          title: "井冈山",
          price: "90"
        },
        {
          id: "0004",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201305/23/06349f279f6be2d4c8d65eac.jpg_200x200_085bb722.jpg",
          title: "井冈山",
          price: "90"
        },
        {
          id: "0005",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201305/23/06349f279f6be2d4c8d65eac.jpg_200x200_085bb722.jpg",
          title: "井冈山",
          price: "90"
        }
      ]
    };
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
  height: 2.2rem;
  width: 2.2rem;
}

.swiper-price {
  color: #ff8300;
}
</style>