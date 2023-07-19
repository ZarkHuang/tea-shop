<template>
  <div class="cart">
    <h1>這是購物車</h1>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue';

export default {
  name:"Cart",
  components:{
    Tabbar,
  }
};
</script>