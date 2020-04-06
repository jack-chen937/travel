<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :hotCities="hotCities" :cities="cities"></city-list>
    <alphlist :cities="cities" @change="handlechange" ></alphlist>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import alphlist from './components/alphlist'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    alphlist
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/static/mock/city.json').then(this.getSucc)
    },
    getSucc (res) {
      console.log(res)
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handlechange (e) {
      this.letter = e
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
