<template>
  <div class="swiper">
    <ul :options="swiperOptions" class="swiper-list">
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
.swiper {
  overflow-y: auto;
  height: 3rem;
  text-align: center;
}

.swiper-list {
  float: left;
  white-space: nowrap;
  width: 500px;
  overflow: hidden;
  height: 2.8rem;
}

.swiper-li {
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