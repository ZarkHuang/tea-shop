<template>
  <div class="mine">
    <h1>這是我</h1>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/common/Tabbar.vue';

export default {
  name:"Mine",
  components:{
    Tabbar,
  }
};
</script>