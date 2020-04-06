<template>
  <div>
    <div class="search">
      <input v-model="keywords" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="keywords" ref="search">
      <ul>
        <li class="search-list border-bottom" @click="selectCity(item.name)" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li class="search-list border-bottom" v-show="!list.length">查询无果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      list: []
    }
  },
  methods: {
    selectCity (city) {
      // 利用vuex去改变store中的参数，让全局city一样
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  watch: {
    keywords () {
      const result = []
      for (let item in this.cities) {
        this.cities[item].forEach(value => {
          if (
            value.name.indexOf(this.keywords) > -1 ||
            value.spell.indexOf(this.keywords) > -1
          ) {
            result.push(value)
          }
        })
      }
      this.list = result
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom {
  &:before {
    border-color: #cccccc;
  }
}

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background-color: lightgreen;
}

.search-input {
  box-sizing: border-box;
  height: 0.62rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.1rem;
  width: 100%;
}

.search-list {
  line-height: 0.76rem;
  padding-left: 0.2rem;
}

.search-content {
  z-index: 1;
  overflow: hidden;
  top: 1.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: #eee;
}
</style>
