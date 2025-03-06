<script setup lang="ts">
  // props
  interface Props {
    title: string;
    isLogout: boolean;
    isDarkTheme: boolean;
  }
  withDefaults(defineProps<Props>(), {
    title: 'title',
    isLogout: false,
    isDarkTheme: false,
  });
  // emits
  interface Emits {
    (e: 'clickBarNavIcon'): void;
    (e: 'clickLogoutIcon'): void;
    (e: 'clickThemeIcon'): void;
  }
  const emits = defineEmits<Emits>();
  const onClickBarNavIcon = (): void => {
    emits('clickBarNavIcon');
  };
  const onClickLogoutIcon = (): void => {
    emits('clickLogoutIcon');
  };
  const onClickThemeIcon = (): void => {
    emits('clickThemeIcon');
  };
</script>

<template>
  <v-app-bar density="compact" elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon @click="onClickBarNavIcon()" />
    </template>

    <v-img
        class="mx-2"
        src="@/assets/logo_act.png"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      
    <v-app-bar-title>{{ title }}</v-app-bar-title>

    <template #append>
      <p v-if="isLogout">田中 太郎</p>
      <v-btn icon @click="onClickLogoutIcon(); $router.push({ name: 'Home'})">
        <v-icon v-if="isLogout">mdi-logout-variant</v-icon>
        <v-icon v-else>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn icon @click="onClickThemeIcon()">
        <v-icon v-if="isDarkTheme">mdi-weather-night</v-icon>
        <v-icon v-else>mdi-weather-sunny</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>