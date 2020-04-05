<template>
  <div class="icons">
    <swiper :options="swiperOptions">
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
  props: {
    iconsList: Array
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false
      }
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