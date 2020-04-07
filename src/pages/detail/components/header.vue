<template>
  <div class="detail">
    <img
      class="detail-img"
      src="//img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_600x330_2200e5bf.jpg"
      alt
    />
    <router-link to="/" class="iconfont back-icon">&#xe656;</router-link>
    <div class="img-info">
      <div class="img-name">武功山</div>
      <div class="img-num">
        <span class="iconfont img-icon">&#xe82d;</span>6
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.detail {
  position: relative;
  height: 0;
  overflow: hidden;
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
  background: rgba(0,0,0,0.5);
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
</style>
