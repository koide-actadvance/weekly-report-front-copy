<template>
    <p class="text-h5 my-2">ログイン</p>

    <v-row>
        <v-col cols="2">
            <p class="text-h6">ログインID</p>
        </v-col>
    
        <v-col>
            <v-responsive
                max-width="344"
                max-height="50"
            >
                <v-text-field
                type="input"
                ></v-text-field>
            </v-responsive>
            <p class="text-h6">ログインIDを入力してください</p>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="2">
            <p class="text-h6">パスワード</p>
        </v-col>

        <v-col>
            <v-responsive
                max-width="344"
                max-height="50"
            >
                <v-text-field
                type = "password"
                ></v-text-field>
            </v-responsive>
            <p class="text-h6">パスワードを入力してください</p>
        </v-col>
    </v-row>
    <v-row>
        <v-btn>
            ログイン
        </v-btn>
    </v-row>
</template>
