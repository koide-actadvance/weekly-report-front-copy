<template>
  <v-container>
    <p class="text-h5 my-2">
      週次報告書入力
    </p>
    <p class="text-body-1 my-2">
      週次報告書の情報を入力してください。
    </p>
    <v-responsive>
      <p class="text-body-1 my-2">
        記入者名：  {{editorName}}
      </p>
      <p class="text-body-1 my-2">
        所属チームLD名：  
        <v-text-field 
          label="所属チームLD名"
        ></v-text-field>
      </p>
      <p class="text-body-1 my-2">
        ユーザー会社名：  
        <v-text-field
          label="ユーザー会社名"
        ></v-text-field>
      </p>
      <p class="text-body-1 my-2">
        元請会社名：  
        <v-text-field
          label="元請会社名"
        ></v-text-field>
      </p>
      <p class="text-body-1 my-2">
        現場住所：  
        <v-text-field
          label="現場住所"
          max-width="500px"
        ></v-text-field>
      </p>
      <p class="text-body-1 my-2">
        現場定時：  
        <v-select
          label="出社時刻"
          :items="['08:50', '08:55', '09:00', '09:05', '09:10', '09:15']"
          max-width="200px"
        ></v-select>
          ～  
        <v-select
          label="退社時刻"
          :items="['17:50', '17:55', '18:00', '18:05', '18:10', '18:15']"
          max-width="200px"
        ></v-select>
      </p>
      <p class="text-body-1 my-2">
        自社担当営業：  
        <v-text-field
          label="自社担当営業"
        ></v-text-field>
      </p>
      <p class="text-body-1 my-2">
        期間：  
        <v-container>
    <!-- 日付入力用のテキストボックス -->
    <!-- テキストフィールドをクリックするとダイアログが表示 -->
    <v-text-field
      v-model="selectedDate"
      label="日付を選択"
      readonly
      @click="dialog = true"  
    />

    <!-- 日付ピッカーを表示するためのダイアログ -->
    <!-- 日付を選択するとダイアログが閉じる -->
    <v-dialog v-model="dialog" persistent max-width="290px">
      <v-card>
        <v-card-title>
          <span class="headline">日付選択</span>
        </v-card-title>
        <v-card-text>
          <!-- v-date-picker -->
          <v-date-picker
            v-model="selectedDate"
            @input="dialog = false" />
        </v-card-text>
        <v-card-actions>
          <v-btn text="閉じる" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
      </p>
      <hr>
      <p class="text-body-1 my-2">
        ●営業に関する情報
      </p>
      <p class="text-body-1 my-2">
        <v-row>
          <v-col cols="12" md="4" sm="4">
            情報源：  
            <v-checkbox label="上位会社"></v-checkbox>
            <v-checkbox label="協力会社"></v-checkbox>
            <v-checkbox label="ACT社員"></v-checkbox>
            <v-checkbox label="その他"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" sm="4">
            <v-text-field
          label="情報源その他"
            ></v-text-field>
          </v-col>
        </v-row>
      </p>
      <p class="text-body-1 my-2">
        <v-row>
          <v-col cols="12" md="4" sm="4">
            情報収集手段：  
            <v-checkbox label="直接問い合わせ"></v-checkbox>
            <v-checkbox label="先輩社員から"></v-checkbox>
            <v-checkbox label="全体周知"></v-checkbox>
            <v-checkbox label="小耳に挟んだ"></v-checkbox>
            <v-checkbox label="その他"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" sm="4">
            <v-text-field
          label="情報収集手段その他"
            ></v-text-field>
          </v-col>
        </v-row>
      </p>
      <p class="text-body-1 my-2">
        <v-row>
          <v-col cols="12" md="4" sm="4">
            営業に関する情報：
            <v-textarea label="営業に関する情報"></v-textarea>
          </v-col>
        </v-row>
      </p>
      <hr>
      <p class="text-body-1 my-2">
        ●業務内容
      </p>
      <p class="text-body-1 my-2">
        平均残業時間：
        <v-select
          label="退社時刻"
          :items="['0:15', '0:30', '0:45', '1:00', '1:15', '1:30', '1:45', '2:00']"
          max-width="200px"
        ></v-select>
      </p>
      <p class="text-body-1 my-2">
        最低稼働時間：  
        <v-text-field
          label="最低稼働時間"
        ></v-text-field>
        <v-radio-group>
          <v-radio label="達成できる" value="1"></v-radio>
          <v-radio label="達成できない" value="2"></v-radio>
        </v-radio-group>
      </p>
      <p class="text-body-1 my-2">
        進捗状況：
        <v-select
          label="進捗状況"
          :items="['A', 'B', 'C', 'D', 'E']"
          max-width="200px"
        ></v-select>
      </p>
      <p class="text-body-1 my-2">
        体調：
        <v-select
          label="体調"
          :items="['A', 'B', 'C', 'D', 'E']"
          max-width="200px"
        ></v-select>
      </p>
      <p class="text-body-1 my-2">
        現場LDや上位会社メンバーとの人間関係：
        <v-select
          label="現場LDや上位会社メンバーとの人間関係"
          :items="['A', 'B', 'C', 'D', 'E']"
          max-width="200px"
        ></v-select>
      </p>
      <p class="text-body-1 my-2">
        <v-row>
          <v-col cols="12" md="4" sm="4">
            失敗したこと、指摘を受けた点（指摘をした人も明記のこと）：
            <v-textarea label="失敗したこと、指摘を受けた点"></v-textarea>
          </v-col>
        </v-row>
      </p>
      <p class="text-body-1 my-2">
        <v-row>
          <v-col cols="12" md="4" sm="4">
            所感：
            <v-textarea label="所感"></v-textarea>
          </v-col>
        </v-row>
      </p>
      <hr>
      <p class="text-body-1 my-2">
        ●現場で稼働しているACT社員の状況
      </p>
      <div>
        <p class="text-body-1 my-2">
         社員名：  
          <v-text-field
            label="社員名"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          <v-row>
            <v-col cols="12" md="4" sm="4">
              状況：
              <v-textarea label="状況"></v-textarea>
            </v-col>
          </v-row>
        </p>
        <p class="text-body-1 my-2">
          <v-row justify="end">
            <v-btn>
              社員を追加
            </v-btn>
          </v-row>
        </p>
      </div>
      <hr>
      <p class="text-body-1 my-2">
        <v-row justify="end">
          <v-btn>
            キャンセル
          </v-btn>
          <v-btn>
            送信
          </v-btn>
        </v-row>
      </p>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  const editorName: string = "新宿　一郎";

  import { ref } from 'vue';

  const dialog = ref(false);  // ダイアログの表示・非表示
  const selectedDate = ref('');  // 選択した日付
</script>
