<template>
  <div class="detail-list">
    <div v-for="(item,index) in list" :key="index">
      <div class="content">
        <span class="item"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.content {
  z-index: 3;
  margin-top: 0.5rem;
}

.item-children {
  margin-left: 0.4rem;
}

.item {
  display: inline-block;
  float: left;
  width: 0.36rem;
  height: 0.36rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 0rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}
</style>