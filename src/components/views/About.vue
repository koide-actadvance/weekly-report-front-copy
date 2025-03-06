<template>
    <v-container>
      <p class="text-h5 my-2">ここは /about です</p>
  
      <div>
        <v-btn color="primary" @click="$router.push('/')">
          GO TO Home
        </v-btn>
      </div>
  
      <router-link class="text-h6" to="/">To Home</router-link> |
    </v-container>
  </template>