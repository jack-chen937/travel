<template>
  <div>
    <detail-header :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-header>
    <banner></banner>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import detailHeader from "./components/header";
import detailList from "./components/list";
import Banner from "./components/banner";
import axios from "axios";

export default {
  components: {
    detailHeader,
    detailList,
    Banner
  },
  data() {
    return {
      list: [],
      bannerImg:'',
      gallaryImgs:[]
    };
  },
  methods: {
    getdata() {
      axios
        .get("/static/mock/detail.json?id=" + this.$route.params.id)
        .then(this.getsucc);
    },
    getsucc(res) {
      res = res.data;
      if(res.ret&&res.data){
          const data=res.data
          this.list=data.categoryList
          this.bannerImg=data.bannerImg
          this.gallaryImgs=data.gallaryImgs
          console.log(data);
          
      }
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>

<style lang="stylus" scoped></style>