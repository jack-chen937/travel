<template>
  <div ref="wrapper">
    <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconsList="iconsList"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-info :infoList="infoList"></home-info>
      <home-weekend :weekList="weekList"></home-weekend>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeInfo from './components/info'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeInfo,
    HomeWeekend
  },
  computed: {
    // 从localstorage 中的store中获取city值
    ...mapState(['city'])
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekList: [],
      infoList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json?city=' + this.city).then(this.getSucc)
    },
    getSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekList = data.weekList
        this.infoList = data.infoList
      }
      console.log(res)
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // 配合当app.vue 中加了keepalive时才会出现，页面加载时使用
    if (this.lastCity !== this.city) {
      console.log('activated')
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
