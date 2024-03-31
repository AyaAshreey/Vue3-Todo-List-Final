<template>
  <todoHeader />
  <router-view />
</template>

<script>
  import todoHeader from "./components/todoHeader.vue";
  export default {
    components: {
      todoHeader,
    },
  };
</script>
<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

  * {
    font-family: "Rubik", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
</style>
