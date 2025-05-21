<template>
  <v-form v-model="valid">
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
            v-model="leadername"
            :counter="20"
            :rules="nameRules"
            max-width="500px"
            :disabled="isDisableInput"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          ユーザー会社名：  
          <v-text-field
            v-model="usercompany"
            :rules="companyRules"
            max-width="500px"
            :disabled="isDisableInput"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          元請会社名：  
          <v-text-field
            v-model="uppercompany"
            :rules="companyRules"
            max-width="500px"
            :disabled="isDisableInput"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          現場住所：  
          <v-text-field
            v-model="officeaddress"
            :rules="addressRules"
            max-width="500px"
            :disabled="isDisableInput"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          現場定時：  
          <v-select
            v-model="startTime"
            :items="['08:50', '08:55', '09:00', '09:05', '09:10', '09:15']"
            max-width="200px"
            :disabled="isDisableInput"
          ></v-select>
            ～  
          <v-select
          v-model="endTime"
            :items="['17:50', '17:55', '18:00', '18:05', '18:10', '18:15']"
            max-width="200px"
            :disabled="isDisableInput"
          ></v-select>
        </p>
        <p class="text-body-1 my-2">
          自社担当営業：  
          <v-text-field
            v-model="managername"
            :counter="20"
            :rules="nameRules"
            max-width="500px"
            :disabled="isDisableInput"
          ></v-text-field>
        </p>
        <p class="text-body-1 my-2">
          期間：  
          <v-container>
            <v-locale-provider locale="ja-JP">
                <v-text-field
                  v-model="startDate"
                  @click="handleClick1"
                  outlined
                  readonly
                  max-width="200px"
                  :disabled="isDisableInput"
                ></v-text-field>
                <v-dialog
                  v-if="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  full-screen
                >
                <v-row justify="center">
                <!-- <v-card class="d-flex justify-center align-center "> -->
                  <v-date-picker
                    v-model="selectedDate1"
                    @click:cancel="handleCancel1"
                    @update:model-value="handleConfirm1"
                    title="日付選択"
                    header="日付"
                  ></v-date-picker>
                <!-- </v-card> -->
                </v-row>
              </v-dialog>
            </v-locale-provider>
          </v-container>
          ～
          <v-container>
            <v-locale-provider locale="ja-JP">
                <v-text-field
                  v-model="endDate"
                  @click="handleClick2"
                  outlined
                  readonly
                  max-width="200px"
                  :disabled="isDisableInput"
                ></v-text-field>
                <v-dialog
                  v-if="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  full-screen
                >
                <v-row justify="center">
                <!-- <v-card class="d-flex justify-center align-center "> -->
                  <v-date-picker
                    v-model="selectedDate2"
                    @click:cancel="handleCancel2"
                    @update:model-value="handleConfirm2"
                    title="日付選択"
                    header="日付"
                  ></v-date-picker>
                <!-- </v-card> -->
                </v-row>
              </v-dialog>
            </v-locale-provider>
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
            <v-checkbox v-model="isChecked1" id="isChecked1" value="sourceTopComp" label="上位会社">
            </v-checkbox>
            <v-checkbox v-model="isChecked1" id="isChecked1" value="sourcePartComp" label="協力会社">
            </v-checkbox>
            <v-checkbox v-model="isChecked1" id="isChecked1" value="sourceAct" label="ACT社員">
            </v-checkbox>
            <v-checkbox v-model="isChecked1" id="isChecked1" value="sourceOther" label="その他">
            </v-checkbox>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="sourceOtherText"
                :rules="sourceOtherTextRules"
                max-width="800px"
                :disabled="isDisableInput"
              ></v-text-field>
            </v-col>
          </v-row>
        </p>
        <p class="text-body-1 my-2">
          <v-row>
            &emsp;情報収集手段：  
            <v-checkbox v-model="isChecked2" id="isChecked2" value="meansDirect" label="直接問い合わせ">
            </v-checkbox>
            <v-checkbox v-model="isChecked2" id="isChecked2" value="meansElder" label="先輩社員から">
            </v-checkbox>
            <v-checkbox v-model="isChecked2" id="isChecked2" value="meansAwareness" label="全体周知">
            </v-checkbox>
            <v-checkbox v-model="isChecked2" id="isChecked2" value="meansPick" label="小耳に挟んだ">
            </v-checkbox>
            <v-checkbox v-model="isChecked2" id="isChecked2" value="meansOther" label="その他">
            </v-checkbox>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="meansOtherText"
                :rules="meansOtherTextRules"
                max-width="800px"
                :disabled="isDisableInput"
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
                max-width="800px"
                :disabled="isDisableInput"
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
            v-model="overTime"
            :items="['0:15', '0:30', '0:45', '1:00', '1:15', '1:30', '1:45', '2:00']"
            max-width="200px"
            :disabled="isDisableInput"
          ></v-select>
        </p>
        <p class="text-body-1 my-2">
          最低稼働時間：  
          <v-row>
            <v-text-field
              v-model="minworktime"
              :rules="timeRules"
              max-width="300px"
              :disabled="isDisableInput"
            ></v-text-field>
            &emsp;&emsp;&emsp;
            <v-radio-group inline v-model="timePassed">
              <v-radio label="達成できる" value="1"></v-radio>
              <v-radio label="達成できない" value="2"></v-radio>
            </v-radio-group>
          </v-row>
        </p>
        <p class="text-body-1 my-2">
          進捗状況：  
          <v-select
            v-model="progress"
            :items="['A', 'B', 'C', 'D', 'E']"
            max-width="200px"
            :disabled="isDisableInput"
          ></v-select>
        </p>
        <p class="text-body-1 my-2">
          体調：  
          <v-select
            v-model="conditions"
            :items="['A', 'B', 'C', 'D', 'E']"
            max-width="200px"
            :disabled="isDisableInput"
          ></v-select>
        </p>
        <p class="text-body-1 my-2">
          現場LDや上位会社メンバーとの人間関係：  
          <v-select
            v-model="relationships"
            :items="['A', 'B', 'C', 'D', 'E']"
            max-width="200px"
            :disabled="isDisableInput"
          ></v-select>
        </p>
        <p class="text-body-1 my-2">
          <v-row>
            <v-col>
              失敗したこと、指摘を受けた点（指摘をした人も明記のこと）：  
              <v-textarea 
                v-model="pointing"
                :rules="pointingRules"
                max-width="800px"
                :disabled="isDisableInput"
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
                max-width="800px"
                :disabled="isDisableInput"
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
              max-width="500px"
              :disabled="isDisableInput"
            ></v-text-field>
          </p>
          <p class="text-body-1 my-2">
            <v-row>
              <v-col>
                状況：  
                <v-textarea 
                  v-model="situation"
                  :rules="situationRules"
                  max-width="800px"
                  :disabled="isDisableInput"
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
        <br />
        <hr>
        <br />
        <p class="text-body-1 my-2">
          <v-row justify="end">
            <v-btn>
              キャンセル
            </v-btn>
            <v-btn @click="sendData">
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
  import { VDatePicker } from 'vuetify/lib/components/VDatePicker/index.mjs';
  import axios from 'axios';

  // セッションからユーザー名を取得
  // const user = JSON.parse(localStorage.getItem('user'));

  const valid = ref(false);  // v-formのバリデーション状態を管理
  const editorName: string = "新宿　一郎";
  const leadername = ref('');
  const usercompany = ref('');
  const uppercompany = ref('');
  const officeaddress = ref('');
  const startTime = ref('');
  const endTime = ref('');
  const managername = ref('');
  const selectedDate1 = ref(new Date());  // 開始日
  const selectedDate2 = ref(new Date());  // 終了日
  const isChecked1 = ref([]);
  const sourceOtherText = ref('');
  const isChecked2 = ref([]);
  const meansOtherText = ref('');
  const eigyoinfo = ref('');
  const overTime = ref('');
  const minworktime = ref('');
  const timePassed = ref('');
  const progress = ref('');
  const conditions = ref('');
  const relationships = ref('');
  const pointing = ref('');
  const thoughts = ref('');
  const employeename = ref('');
  const situation = ref('');

  let menu1 = ref<boolean>(false);
  let menu2 = ref<boolean>(false);
  let startDate = ref<string>(``);
  let endDate = ref<string>(``);
  let isDisableInput = ref<boolean>(false);

  const handleClick1 = () => {
    menu1.value = true;
  };
  const handleClick2 = () => {
    menu2.value = true;
  };
  const handleCancel1 = () => {
    menu1.value = false;
  };
  const handleCancel2 = () => {
    menu2.value = false;
  };
  const handleConfirm1 = () => {
    startDate.value = formatDate(selectedDate1.value);
    menu1.value = false;
  };
  const handleConfirm2 = () => {
    endDate.value = formatDate(selectedDate2.value);
    menu2.value = false;
  };
  function formatDate(dateForPicker:Date):string {
		if (!dateForPicker) return '';
		const date = new Date(dateForPicker);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}/${month}/${day}`;
	}

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

  const sourceOtherTextRules = ref(
    [(v: string) => (isChecked1.value && !v ? "「その他」をチェックした場合、入力必須です。" : true)]
  );

  const meansOtherTextRules = ref(
    [(v: string) => (isChecked2.value && !v ? "「その他」をチェックした場合、入力必須です。" : true)]
  );

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

  async function sendData() {
    // 連携する値を格納
    const jsonData = {
      editorName: editorName,
      leadername: leadername.value,
      usercompany: usercompany.value,
      uppercompany: uppercompany.value,
      officeaddress: officeaddress.value,
      startTime: startTime.value,
      endTime: endTime.value,
      managername: managername.value,
      startDate: startDate.value,
      endDate: endDate.value,
      selectedDate1: selectedDate1.value,
      selectedDate2: selectedDate2.value,
      isChecked1: isChecked1.value,
      sourceOtherText: sourceOtherText.value,
      isChecked2: isChecked2.value,
      meansOtherText: meansOtherText.value,
      overTime: overTime.value,
      minworktime: minworktime.value,
      timePassed: timePassed.value,
      progress: progress.value,
      conditions: conditions.value,
      relationships: relationships.value,
      pointing: pointing.value,
      thoughts: thoughts.value,
      employeename: employeename.value,
      situation: situation.value,
    };

    try {
      const response = await axios.post('http://localhost:8081/api/dummies/test', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('サーバーからのレスポンス:', response.data);
    } catch (error) {
      console.error('データ送信エラー:', error);
    }
  }
</script>
