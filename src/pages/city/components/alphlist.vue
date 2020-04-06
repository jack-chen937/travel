<template>
  <div>
    <ul class="list">
      <li v-for="(item,key) in cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'alphlist',
  props:{
    cities:Object
  }
};
</script>

<style lang="stylus" scoped>
.list {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 1.68rem;
  margin-right: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

li {
  height: 0.4rem;
  line-height: 0.4rem;
  color: lightgreen ;
}
</style>