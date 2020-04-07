<template>
  <div class="info">
    <div class="like">
      <div class="like-div">
        <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt /> 猜你喜欢
      </div>
    </div>
    <ul>
      <router-link
        tag="li"
        class="content"
        v-for="item in infoList"
        :key="item.id"
        :to="'/detail/'+item.id"
      >
        <div class="info-list">
          <img class="content-left" :src="item.imgurl" alt />
          <div class="content-right">
            <div>
              <div class="top">{{item.place}}</div>
              <div class="middle">
                <div class="goodrate">好评率{{item.goodrate}}</div>
                <div class="comment">{{item.comments}}条评论</div>
              </div>
              <div class="bottom">
                <div class="price">{{item.price}}</div>起
                <div class="address">{{item.address}}</div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeInfo",
  props: {
    infoList: Array
  }
};
</script>
<style lang="stylus" scoped>
.like {
  background-color: #fff;
  height: 0.64rem;
}

.like-div {
  font-size: 0.32rem;
  line-height: 0.64rem;
  background-color: #fff;
  height: 0.64rem;
}

.like img {
  height: 0.32rem;
  width: 0.32rem;
}

.content {
  position: relative;
  height: 2.4rem;
  width: 100%;
}

.info-list {
  display: flex;
  width: 100%;
  height: 2.1rem;
  position: absolute;
  top: 50%;
  margin-top: -1.05rem; /* negative half of the height */
}

.content-left {
  flex: 3;
  background-color: lightgreen;
  height: 2.1rem;
  width: 2.1rem;
  float: left;
}

.content-right {
  margin-left: 0.2rem;
  flex: 7;
  /* 定义body的元素垂直居中 */
  /* 定义body的里的元素水平居中 */
  height: 2.1rem;
  background-color: white;
  float: left;
}

.top {
  margin-top: 0.26rem;
  height: 0.44rem;
  color: #212121;
  font-size: 0.32rem;
  line-height: 0.44rem;
  line-height: 0.7rem;
  height: 0.7rem;
  background-color: white;
}

.middle {
  color: #616161;
  font-size: 0.24rem;
  line-height: 0.34rem;
  vertical-align: text-bottom;
  height: 0.34rem;
}

.goodrate {
  float: left;
}

.comment {
  margin-left: 0.4rem;
  float: left;
}

.bottom {
  font-size: 0.24rem;
  line-height: 0.7rem;
  height: 0.7rem;
  background-color: white;
}

.price {
  color: #ff8300;
  font-size: 0.4rem;
  float: left;
}

.address {
  float: right;
}
</style>