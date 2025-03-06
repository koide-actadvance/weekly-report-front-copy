<template>
  <v-container>
    <p class="text-h5 my-2">ここは /sample1 です</p>

    <v-card>
      <p class="text-h5 my-2">サンプルリストA</p>
      <v-list>
        <v-list-item title="Sapporo">
        </v-list-item>
        <v-list-item title="Miyagi">
        </v-list-item>
        <v-list-item title="Tokyo">
        </v-list-item>
      </v-list>
    </v-card>

    <v-card>
      <p class="text-h5 my-2">{{listbTitle}}</p>
      <v-list :items="listbData">
      </v-list>
    </v-card>

  </v-container>
</template>

<script setup lang="ts">

  // params
  const listbTitle: string = "サンプルリストB";
  const listbData: string[] = ["Osaka", "Nagoya", "Fukuoka",];

</script>
