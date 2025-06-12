<template>
    <v-container>
    <v-form
      v-model="isValid"
    >
    <v-container></v-container>
    <v-row>
        <v-col cols="2">
            <p class="text-h5 mt-3">ログインID</p>
        </v-col>
    
        <v-col>
            <v-responsive
                max-width="344"
                max-height="80"
            >
                <v-text-field
                    type="input"
                    variant="outlined"
                    bg-color="blue-grey-lighten-4"
                    maxlength="20"
                    v-model="loginid"
                    :rules="[
                        (v) => v.length > 0 || 'ログインIDを入力してください',
                    ]"
                ></v-text-field>
            </v-responsive>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="2">
            <p class="text-h5 mt-3">パスワード</p>
        </v-col>

        <v-col>
            <v-responsive
                max-width="344"
                max-height="80"
            >
                <v-text-field
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    variant="outlined"
                    bg-color="blue-grey-lighten-4"
                    maxlength="20"
                    v-model="password"
                    @click:append-inner="visible = !visible"
                    :rules="[
                        (v) => v.length > 0 || 'パスワードを入力してください',
                    ]" 
                ></v-text-field>
            </v-responsive>
        </v-col>
    </v-row>
    <v-row>
        <v-btn @click="$router.push('/list')">
            ログイン
        </v-btn>
    </v-row>
    </v-form>
    </v-container>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    const loginid = ref('');
    const password = ref('');
    const isValid = ref(false);
    const visible = ref(false);
</script>