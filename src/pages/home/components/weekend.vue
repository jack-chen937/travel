<template>
  <div class="info">
    <div class="like">
      <div class="like-div">
        <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt /> 周末好心情
      </div>
    </div>
    <ul>
      <li class="content">
        <div class="info-list" v-for="item in infoList" :key="item.id">
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
  name: "HomeWeekend",
  data() {
    return {
      infoList: [
        {
          id: "0001",
          imgurl:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361434737,3652955681&fm=26&gp=0.jpg",
          place: "羊狮慕风景区",
          detail:
            "羊狮慕东连明月山，西接发云界，东西走向，景区最高峰石笋峰海拔1764米，以花岗岩峰林地貌为主。武功山与龙虎山、三清山、衡山一起，称为道教的福地名山，在道教中有着特殊地位。己开发的景观有百余处，奇峰怪石，古树名花，流泉飞瀑，云海雾涛被称为羊狮慕景观的“四绝”，还有罕见奇观“佛光”。"
        }
      ]
    };
  }
};
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