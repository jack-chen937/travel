<template>
  <div class="detail">
    <div @click="open">
      <img
        class="detail-img"
        src="//img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_600x330_2200e5bf.jpg"
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
      :swiperList="swiperList"
      :gallaryflag="gallaryflag"
      @close="closegallary"
      v-show="gallaryflag"
    ></common-gallary>
    <banner></banner>
  </div>
</template>

<script>
import commonGallary from "../../../common/gallary/gallary";
import Banner from "./banner";
export default {
  name: "detailHeader",
  components: {
    commonGallary,
    Banner
  },
  data() {
    return {
      gallaryflag: false,
      swiperList: [
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20192/02cf368951bd5ecfa6569097ab378302.jpg",
        "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20192/0faaeab5fc1bae97d8c18d76c96b3a13.jpg"
      ]
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
