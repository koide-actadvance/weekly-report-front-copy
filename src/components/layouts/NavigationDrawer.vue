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
      title: 'Login',
      value: 'home',
      to: '/',
    },
    {
      prependIcon: 'mdi-information',
      title: 'List',
      value: 'list',
      to: '/list',
    },
    {
      prependIcon: 'mdi-information',
      title: 'Reportinput',
      value: 'reportinput',
      to: '/reportinput',
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