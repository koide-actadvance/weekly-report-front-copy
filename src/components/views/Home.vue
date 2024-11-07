<template>
    <v-container>
      <p class="text-h5 my-2">ここは / です</p>
  
      <div>
        <v-btn color="primary" @click="$router.push('/about')">
          GO TO ABOUT
        </v-btn>
      </div>
  
      <router-link class="text-h6" to="/about">To About</router-link> |
    </v-container>
  </template>