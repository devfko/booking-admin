<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg5 xl4>
            <v-card>
                <v-toolbar dark color="blue darken-3">
                    <v-toolbar-title>
                        Access
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-text-field v-model="email" autofocus color="accent" label="Email" required>
                    </v-text-field>
                    <v-text-field v-model="password" type="password" color="accent" label="Password" required>
                    </v-text-field>
                    <v-flex class="red--text" v-if="errMsg">
                        {{errMsg}}
                    </v-flex>
                </v-card-text>
                <v-card-actions class="px-3 pb-3">
                    <v-flex text-xs-right>
                        <v-btn @click="signup()" color="primary">Sign Up</v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-flex>

        <upload-files></upload-files>
    </v-layout>
</template>

<script>
    import axios from 'axios';
    import UploadFiles from './UploadFiles';

    export default {
        name: 'login',

        data() {
            return {
                email: '',
                password: '',
                errMsg: '',
                info_login: []
            }
        },

        methods: {
            async signup() {
                let me = this;
                let token = "";
                try {
                    const result = await axios.post('', {
                    query: `
                        mutation login($email: String!, $password: String!) {
                            loginCommercialEstablishment(email: $email, password: $password) {
                                establishment,
                                token
                            }
                        }
                        `,
                        variables: {
                            email: this.email,
                            password: this.password,
                        }
                    });

                    me.info_login = result.data.data.loginCommercialEstablishment;
                    token = me.info_login.token;

                    if (token == "") {
                        me.errMsg = me.info_login.establishment;
                    } else {
                        this.$store.dispatch("saveToken", token);
                        this.$router.push({path: 'dashboard'});
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        },

        components: {
            UploadFiles
        }

    }
</script>

<style>

</style>