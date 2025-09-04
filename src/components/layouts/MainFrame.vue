<template>
  <v-app :theme="theme">
    <AppBar
      :title="title"
      color="primary"
      @click-bar-nav-icon="drawer = !drawer"
      @click-theme-icon="switchTheme"
      @click-logout-icon="switchLogout"
      :isLogout="isLogout"
      :isDarkTheme="isDarkTheme"
      :key="theme"
    />
    <NavigationDrawer v-model="drawer" />
    <MainView />
    <Footer
      :owner-name="ownerName"
      :published-year="publishedYear"
      color="primary"
    />
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import AppBar from '@/components/layouts/AppBar.vue';
  import NavigationDrawer from '@/components/layouts/NavigationDrawer.vue';
  import MainView from '@/components/layouts/MainView.vue';
  import Footer from '@/components/layouts/Footer.vue';

  // params
  const title: string = '週報システム';
  const ownerName: string = 'ACT.';
  const publishedYear: number = 2025;

  // refs
  const drawer = ref(false);
  const THEMES = {
    Light: 'light',
    Dark: 'dark',
  };
  const theme = ref(THEMES.Light);
  const isLogout = ref(true);
  const isDarkTheme = ref(true);

  // functions
  const switchTheme = () => {
    theme.value = theme.value === THEMES.Light ? THEMES.Dark : THEMES.Light;
    isDarkTheme.value = isDarkTheme.value === true ? false : true;
  };
  const switchLogout = () => {
    isLogout.value = isLogout.value === true ? false : true;
  };
</script>
