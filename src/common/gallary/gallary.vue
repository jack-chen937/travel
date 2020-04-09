<template>
  <div class="gallary" @click="close">
    <div class="container">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonGallary",
  props: {
    gallaryflag: "",
    gallaryImgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true,
        autoplay: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style lang="stylus" scoped>
.gallary >>> .swiper-container {
  overflow: inherit;
}

.gallary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  position: fixed;
  background-color: black;
  z-index: 99;
}

.container {
  height: 0;
  width: 100%;
  // 高度容积整屏的页面大小
  padding-bottom: 100%;
}

.swiper-img {
  height: 4.2rem;
  width: 100%;
}

.swiper-pagination {
  bottom: -50px;
  color: #fff;
}
</style>