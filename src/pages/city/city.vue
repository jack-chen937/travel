<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <alphlist></alphlist>
  </div>
</template>

<script>
import CityHeader from "./components/header";
import CitySearch from "./components/search";
import CityList from "./components/list";
import alphlist from "./components/alphlist";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    alphlist
  }
};
</script>

<style lang="stylus" scoped>
</style>