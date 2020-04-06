<template>
  <div class="info">
    <div class="like">
      <div class="like-div">
        <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt /> 周末好心情
      </div>
    </div>
    <ul>
      <li class="content">
        <div class="info-list" v-for="item in weekList" :key="item.id">
          <div>
            <img class="img1" :src="item.imgurl" alt />
          </div>
          <div class="place">
            {{item.place}}
            <div>
              <div class="detail">{{item.detail}}</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekList: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/ellipsis.styl';

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

.img1 {
  margin-top: 0.2rem;
  height: 2.74rem;
  width: 100%;
}

.place {
  margin-top: 0.1rem;
  font-size: 0.4rem;
}

.detail {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  ellipsis();
}
</style>
