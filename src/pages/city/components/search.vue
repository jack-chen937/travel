<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
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
</style>