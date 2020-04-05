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
  props:{
    swiperList:Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop:true,
        autoplay:true,
        autoplay:2000
      },
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
  height: 2.5rem;
  width: 100%;
}
</style>