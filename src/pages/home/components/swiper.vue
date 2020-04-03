<template>
  <div class="swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgurl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop:true,
        autoplay:true,
        autoplay:2000
      },
      swiperList: [
        {
          id: "0001",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201403/10/b27ead9b352d1ab09e0d86605defcf30.jpg_250x250_165f4014.jpg"
        },
        {
          id: "0002",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_250x250_ed667de7.jpg"
        },
        {
          id: "0003",
          imgurl:
            "https://imgs.qunarzz.com/sight/p0/201305/23/06349f279f6be2d4c8d65eac.jpg_200x200_085bb722.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// 使得遇到.swiper-pagination-bullet-active则 background: #fff !important
.swiper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}
.swiper {
  height: 2.5rem;
}

.swiper-img {
  height: 2rem;
  width: 100%;
}
</style>