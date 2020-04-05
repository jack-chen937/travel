<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.iconurl" style="opacity: 1;" />
          </div>
          <span class="icon-des">{{item.desc}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
        disableOnInteraction: false
      },
      iconsList: [
        {
          id: "001",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "旅游景点"
        },
        {
          id: "002",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png",
          desc: "井冈山"
        },
        {
          id: "003",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          desc: "踏青赏花"
        },
        {
          id: "004",
          iconurl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
          desc: "激情武功山"
        },
        {
          id: "005",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "组团一日游"
        },
        {
          id: "006",
          iconurl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f85ce21492e4f7896498dc70dc43f8b3.png",
          desc: "羊狮慕"
        },
        {
          id: "007",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png",
          desc: "横店影城"
        },
        {
          id: "008",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1803/ec/0e1e0238e24ba02.png",
          desc: "婺源风光"
        },
        {
          id: "009",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "旅游景点"
        },
        {
          id: "010",
          iconurl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "旅游景点"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/ellipsis.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  background-color: #fff;
  margin-bottom: 1%;
  margin-top: 0;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.44rem;
  right: 0;
  background-color: white;
}

.icon-imgcontent {
  height: 100%;
  display: block;
  margin: 0 auto;
}

.icon {
  overflow: hidden;
  position: relative;
  float: left;
  width: 25%;
  padding-bottom: 25%;
  background-color: #fff;
}

.icon-des {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: $textColor;
  background-color: white;
  line-height: 0.44rem;
  height: 0.44rem;
  ellipsis();
}
</style>