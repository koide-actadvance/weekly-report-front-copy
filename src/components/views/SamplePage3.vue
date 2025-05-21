<template>
  <div>
    <h1>APIからのデータ</h1>
    <ul>
      <li v-for="(item, index) in data" :key="index">{{ item.name }}</li>
    </ul>
  </div>

  <div>
    <h1>JSONデータ送信サンプル</h1>
    <button @click="sendData">データ送信</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [], // APIから取得したデータを格納する
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.data = response.data;
      } catch (error) {
        console.error('データ取得エラー:', error);
      }
    },
    async sendData() {
      const jsonData = {
        name: "John Doe",
        email: "johndoe@example.com",
        message: "Hello, this is a test message!"
      };

      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', jsonData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('サーバーからのレスポンス:', response.data);
      } catch (error) {
        console.error('データ送信エラー:', error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>