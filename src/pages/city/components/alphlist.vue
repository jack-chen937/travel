<template>
  <div>
    <ul class="list">
      <li
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="handleclick"
        @touchstart="handlestart"
        @touchmove="handlemove"
        @touchend="handlend"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "alphlist",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      Touchflag: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    //侧边字母A到search组件底部的距离==72px
    // console.log(startY);//72
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleclick(e) {
      this.$emit("change", e.target.innerText);
    },
    handlestart() {
      this.Touchflag = true;
    },
    handlemove(e) {
      if (this.Touchflag) {
        const touchY = e.touches[0].clientY - 89; //89为顶部高度
        const index = Math.floor((touchY - this.startY) / 20);
        console.log(index);
        if (index >= 0 && index < 23) {
          this.$emit("change", this.letters[index]);
        }
      }
    },
    handlend() {
      this.Touchflag = false;
    }
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
  color: lightgreen;
}
</style>