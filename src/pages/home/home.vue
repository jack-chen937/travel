<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-info :infoList="infoList"></home-info>
    <home-weekend :weekList="weekList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
import HomeRecommend from "./components/recommend";
import HomeInfo from "./components/info";
import HomeWeekend from "./components/weekend";
import axios from "axios";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeInfo,
    HomeWeekend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekList: [],
      infoList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/static/mock/index.json").then(this.getSucc);
    },
    getSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconsList = data.iconsList;
        this.recommendList = data.recommendList;
        this.weekList = data.weekList;
        this.infoList = data.infoList;
      }
      console.log(res);
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style>
</style>