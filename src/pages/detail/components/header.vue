<template>
  <div class="detail">
    <div @click="open">
      <img
        class="detail-img"
        :src="bannerImg"
        alt
      />

      <div class="img-info">
        <div class="img-name">武功山</div>
        <div class="img-num">
          <span class="iconfont img-icon">&#xe82d;</span>6
        </div>
      </div>
    </div>
    <common-gallary
      :gallaryImgs="gallaryImgs"
      :gallaryflag="gallaryflag"
      @close="closegallary"
      v-show="gallaryflag"
    ></common-gallary>

  </div>
</template>

<script>
import commonGallary from "../../../common/gallary/gallary";
export default {
  name: "detailHeader",
  props:{
    bannerImg:String,
    gallaryImgs:Array
  },
  components: {
    commonGallary,
  },
  data() {
    return {
      gallaryflag: false,
    };
  },
  methods: {
    open() {
      this.gallaryflag = true;
    },
    closegallary() {
      this.gallaryflag = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.detail {
  position: relative;
  height: 0;
  padding-bottom: 55%;
}

.detail-img {
  width: 100%;
}

.img-info {
  display: flex;
  bottom: 0;
  right: 0;
  line-height: 0.6rem;
  left: 0;
  position: absolute;
  // 渐变效果
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.img-num {
  height: 0.4rem;
  line-height: 0.4rem;
  width: 1.2rem;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
  color: #ddd;
  text-align: center;
  font-size: 0.24rem;
}

.img-icon {
  margin-right: 0.1rem;
  font-size: 0.2rem;
}

.img-name {
  color: #ddd;
  flex: 1;
  font-size: 0.4rem;
  margin: 0.1rem;
}
</style>
