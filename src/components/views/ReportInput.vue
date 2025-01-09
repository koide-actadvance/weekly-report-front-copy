<template>
  <v-form v-model="valid">
    <v-container>
      <p class="text-h5 my-2">
        週次報告書入力
      </p>
      <p class="text-body-1 my-2">
        週次報告書の情報を入力してください。
      </p>
      <!-- テキストボックスのLabelは消すか入力したときに消えるようにする -->
      <v-responsive>
        <p class="text-body-1 my-2">
          記入者名：  {{editorName}}
        </p>
        <p class="text-body-1 my-2">
          所属チームLD名：  
          <v-text-field 
            v-model="leadername"
            :counter="20"
            :rules="nameRules"
            label="所属チームLD名"
            max-width="500px"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          ユーザー会社名：  
          <v-text-field
            v-model="usercompany"
            :rules="companyRules"
            label="ユーザー会社名"
            max-width="500px"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          元請会社名：  
          <v-text-field
            v-model="uppercompany"
            :rules="companyRules"
            label="元請会社名"
            max-width="500px"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          現場住所：  
          <v-text-field
            v-model="officeaddress"
            :rules="addressRules"
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
            v-model="managername"
            :counter="20"
            :rules="nameRules"
            label="自社担当営業"
            max-width="500px"
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
              max-width="500px"
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
                    @input="dialog = false">
                  </v-date-picker>
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
        <br />
        <p class="text-body-1 my-2">
          <v-row>
            &emsp;情報源：  
            <v-checkbox label="上位会社"></v-checkbox>
            <v-checkbox label="協力会社"></v-checkbox>
            <v-checkbox label="ACT社員"></v-checkbox>
            <v-checkbox label="その他"></v-checkbox>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="情報源その他"
                max-width="800px"
              ></v-text-field>
            </v-col>
          </v-row>
        </p>
        <p class="text-body-1 my-2">
          <v-row>
            &emsp;情報収集手段：  
            <v-checkbox label="直接問い合わせ"></v-checkbox>
            <v-checkbox label="先輩社員から"></v-checkbox>
            <v-checkbox label="全体周知"></v-checkbox>
            <v-checkbox label="小耳に挟んだ"></v-checkbox>
            <v-checkbox label="その他"></v-checkbox>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="情報収集手段その他"
                max-width="800px"
              ></v-text-field>
            </v-col>
          </v-row>
        </p>
        <p class="text-body-1 my-2">
          <v-row>
            <v-col>
              営業に関する情報：  
              <v-textarea 
                v-model="eigyoinfo"
                label="営業に関する情報"
                max-width="800px"
              ></v-textarea>
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
            label="平均残業時間"
            :items="['0:15', '0:30', '0:45', '1:00', '1:15', '1:30', '1:45', '2:00']"
            max-width="200px"
          ></v-select>
        </p>
        <p class="text-body-1 my-2">
          最低稼働時間：  
          <v-row>
            <v-text-field
              v-model="minworktime"
              :rules="timeRules"
              label="最低稼働時間"
              max-width="300px"
            ></v-text-field>
            &emsp;&emsp;&emsp;
            <v-radio-group inline>
              <v-radio label="達成できる" value="1"></v-radio>
              <v-radio label="達成できない" value="2"></v-radio>
            </v-radio-group>
          </v-row>
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
            <v-col>
              失敗したこと、指摘を受けた点（指摘をした人も明記のこと）：  
              <v-textarea 
                v-model="pointing"
                :rules="pointingRules"
                label="失敗したこと、指摘を受けた点"
                max-width="800px"
              ></v-textarea>
            </v-col>
          </v-row>
        </p>
        <p class="text-body-1 my-2">
          <v-row>
            <v-col>
              所感：  
              <v-textarea 
                v-model="thoughts"
                :rules="thoughtsRules"
                label="所感"
                max-width="800px"
              ></v-textarea>
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
              v-model="employeename"
              :counter="20"
              :rules="nameRules"
              label="社員名"
              max-width="500px"
            ></v-text-field>
          </p>
          <p class="text-body-1 my-2">
            <v-row>
              <v-col>
                状況：  
                <v-textarea 
                  v-model="situation"
                  :rules="situationRules"
                  label="状況"
                  max-width="800px"
                ></v-textarea>
              </v-col>
            </v-row>
          </p>
        </div>
        <p class="text-body-1 my-2">
          <v-row justify="end">
            <v-btn>
              社員を追加
            </v-btn>
          </v-row>
        </p>
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
  </v-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const valid = ref(false);  // v-formのバリデーション状態を管理
  const editorName: string = "新宿　一郎";
  const leadername = ref('');
  const usercompany = ref('');
  const uppercompany = ref('');
  const officeaddress = ref('');
  const managername = ref('');
  const selectedDate = ref('');  // 選択した日付
  const eigyoinfo = ref('');
  const minworktime = ref('');
  const pointing = ref('');
  const thoughts = ref('');
  const employeename = ref('');
  const situation = ref('');
  const dialog = ref(false);  // ダイアログの表示・非表示

  // バリデーションルール
  const nameRules = [
    (value: string) => {
      if (value) return true;
      return '名前を入力してください。';
    },
    (value: string) => {
      if (value.length <= 20) return true;
      return '名前は20文字以内で入力してください。';
    }
  ];
  const companyRules = [
    (value: string) => {
      if (value) return true;
      return '会社名を入力してください。';
    },
  ];
  const addressRules = [
    (value: string) => {
      if (value) return true;
      return '住所を入力してください。';
    },
  ];
  const timeRules = [
    (value: string) => {
      if (value) return true;
      return '時間を入力してください。';
    },
  ];
  const pointingRules = [
    (value: string) => {
      if (value) return true;
      return '失敗したこと、指摘を受けた点を入力してください。無い場合は「特になし」と入力してください。';
    },
  ];
  const thoughtsRules = [
    (value: string) => {
      if (value) return true;
      return '所感を入力してください。';
    },
  ];
  const situationRules = [
    (value: string) => {
      if (value) return true;
      return '状況を入力してください。';
    },
  ];
</script>
