<script setup lang="ts">
  // params
  const navs: {
    prependIcon: string;
    title: string;
    value: string;
    to: string;
  }[] = [
    {
      prependIcon: 'mdi-home',
      title: 'Home',
      value: 'home',
      to: '/',
    },
    {
      prependIcon: 'mdi-information',
      title: 'About',
      value: 'about',
      to: '/about',
    },
    {
      prependIcon: 'mdi-information',
      title: 'SamplePage1',
      value: 'samplePage1',
      to: '/samplePage1',
    },
    {
      prependIcon: 'mdi-information',
      title: 'SamplePage2',
      value: 'samplePage2',
      to: '/samplePage2',
    },
  ];
</script>

<template>
  <v-navigation-drawer>
    <v-list nav density="comfortable">
      <template v-for="nav in navs" :key="nav.value">
        <v-list-item
          density="compact"
          :prepend-icon="nav.prependIcon"
          :title="nav.title"
          :value="nav.value"
          :to="nav.to"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>