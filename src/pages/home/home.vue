<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from "./components/header";
export default {
  name: "home",
  components: {
    HomeHeader
  }
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
</style>