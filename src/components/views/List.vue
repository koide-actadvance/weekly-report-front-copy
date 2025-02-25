<template>
  <v-container>
    <p class="text-h5 my-2">週報一覧画面（週次報告書）</p>

    <v-text-field
      hint="Enter a keyword"
      label="キーワードでフィルタ"
      persistent-hint
      type="input"
    ></v-text-field>

    <v-btn>
      検索
    </v-btn>

    <v-btn>
      新規
    </v-btn>

    <v-btn>
      クリア
    </v-btn>

    <!--  <v-date-picker v-model="range" range></v-date-picker> -->
    <!--  <p>選択された範囲: {{ range }}</p> -->

    <div>
      <p class="text-h3">週報一覧</p>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="pref"
      :items-per-page-options="pages"
      items-per-page-text="表示行数"
      class="elevation-1"
    ></v-data-table>
    </div>

  </v-container>
</template>

<script>
export default {
  data () {
    return {

      itemsPerPage: 5,
      pages: [
        {value: 5, title: '5'},
        {value: 10, title: '10'},
        {value: 20, title: '20'},
        {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'}
      ],
      headers: [
        {
          title: '番号',
          align: 'end',
          sortable: false,
          key: 'no',
        },
        { title: '社員名', align: 'start', key: 'pref_jp' },
        { title: '所属チーム名', align: 'start', key: 'pref_en' },
        { title: '会社名', align: 'start', key: 'area' },
        { title: '元請', align: 'start', key: 'population' },
        { title: '自社担当営業', align: 'start', key: 'eigyo' },
        { title: '期間', align: 'start', key: 'kikan' },
      ],
      pref: [
        {no: 1,pref_jp: "山田",pref_en: "Advance",area: "A社",population: "NDI", eigyo:"宮川L",kikan:"XXXX"},
        {no: 2,pref_jp: "鈴木",pref_en: "Act",area: "B社",population: "NEC", eigyo:"秋山L",kikan:"XXXX"}
      ],
      range: null, // 配列で範囲を管理 ['2024-12-01', '2024-12-10']
    }
  }
}
</script>