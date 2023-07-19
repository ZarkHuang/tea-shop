<template>
  <div class="home">
    <Header></Header>
    <div>
      <fun-tabs v-model="tabsValue" @change="handleTabsChange">
        <fun-tab-item
          v-for="item in filteredTabsItems"
          :key="item.value"
          :title="item.title"
          :name="item.value"
          :badge="item.badge"
        />
      </fun-tabs>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script setup>
import Header from '../components/home/Header.vue';
import Tabbar from '@/components/common/Tabbar.vue';
import { ref, computed, onBeforeUnmount } from 'vue';
import { FunTabs, FunTabItem } from 'fun-tab';

const tabsValue = ref('home');
const tabsItems = ref([
  { title: '首頁', value: 'home' ,badge: 22 },
  { title: '推薦', value: 'recommend' },
  { title: 'Android', value: 'android' },
  { title: '前端', value: 'fe'},
  { title: '後端', value: 'be' },
  { title: 'iOS', value: 'ios' },
  { title: '產品', value: 'pm' },
  { title: '人工智能', value: 'ai' },
  { title: '設計', value: 'design' },
]);

const filteredTabsItems = computed(() => {
  return tabsItems.value.filter(item => !item.__unmounted);
});

tabsItems.value.forEach(item => {
  item.__unmounted = false;
});

onBeforeUnmount(() => {
  tabsItems.value.forEach(item => {
    item.__unmounted = true;
  });
});
</script>

<style scoped>
.fun-tabs {
  position: fixed;
  top: 1.8rem;
  left: 0;
  right: 0;
  border-bottom: none;
}
</style>
