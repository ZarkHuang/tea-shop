<template>
  <div class="list">
    <h1>清單</h1>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../components/common/Tabbar.vue';

export default {
  name:"List",
  components:{
    Tabbar,
  }
};
</script>