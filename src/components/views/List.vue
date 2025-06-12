<template>
  <v-container>
    <p class="text-h5 my-2">週報一覧画面（週次報告書）</p>
    <v-btn @click="$router.push('/reportinput')" color="red darken-1">
      新規
    </v-btn>

    <div>
      <p class="text-h3">週報一覧</p>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="pref"
      :items-per-page-options="pages"
      items-per-page-text="表示行数"
      class="elevation-1 dataTableStyle"
    >
    <template v-slot:[`item.actions`]="{ item }">
        <v-btn
          size="small"
          @click="reportdetail(item.raw)"
        >
          詳細
        </v-btn>
    </template>
    </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    reportdetail(item){
      this.$router.push('/reportdetail');
    }
  },
  data () {
    return {
      itemsPerPage: 20,
      pages: [
        {value: 5, title: '5'},
        {value: 10, title: '10'},
        {value: 20, title: '20'},
        {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'}
      ],
      headers: [
        { title: '社員名', align: 'start', key: 'pref_jp' },
        { title: '所属チーム名', align: 'start', key: 'pref_en' },
        { title: '会社名', align: 'start', key: 'area' },
        { title: '元請', align: 'start', key: 'population' },
        { title: '自社担当営業', align: 'start', key: 'eigyo' },
        { title: '期間', align: 'start', key: 'kikan' },
        { title: '', align: 'end', key: 'actions' }
      ],
      pref: [
        {no: 1,pref_jp: "山田",pref_en: "Advance",area: "A社",population: "NDI", eigyo:"宮川Amg",kikan:"2015/7/20～2015/7/26",actions:"詳細"},
        {no: 2,pref_jp: "鈴木",pref_en: "Act",area: "B社",population: "NEC", eigyo:"秋山Amg",kikan:"2015/7/20～2015/7/26",actions:"詳細"},
        {no: 3,pref_jp: "山田",pref_en: "Advance",area: "A社",population: "NDI", eigyo:"宮川Amg",kikan:"2015/7/13～2015/7/19",actions:"詳細"},
        {no: 4,pref_jp: "鈴木",pref_en: "Act",area: "B社",population: "NEC", eigyo:"秋山Amg",kikan:"2015/7/13～2015/7/19",actions:"詳細"},
        {no: 5,pref_jp: "山田",pref_en: "Advance",area: "A社",population: "NDI", eigyo:"宮川Amg",kikan:"2015/7/6～2015/7/12",actions:"詳細"},
        {no: 6,pref_jp: "鈴木",pref_en: "Act",area: "B社",population: "NEC", eigyo:"秋山Amg",kikan:"2015/7/6～2015/7/12",actions:"詳細"}
      ],
    }
  }
}
</script>
<style>
.dataTableStyle th {
	background-color: #66FFFF !important;
	font-weight: bold !important;
	color: #000000 !important;
}
</style>