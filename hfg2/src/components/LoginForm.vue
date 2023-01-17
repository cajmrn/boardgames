<template>
    <v-row align="center">
        <v-col cols="12">     
            <v-card variant="outlined">
                <v-card-title align="center">Committee for the Advancement of Complicated Board Games</v-card-title>
                <v-form @submit.prevent="handle_submit">
                    <v-col>
                        <v-text-field label="email" v-model="email"></v-text-field>
                        <v-text-field type="password" label="password" v-model="password"></v-text-field>
                    </v-col>
                    <v-col cols="12" offset="5">
                        <v-btn type="submit">Login</v-btn>
                    </v-col>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import axios from 'axios';

export default{
    name:'login'
    ,data(){
        return {
            email:''
            ,password:''
        }
    }
    ,methods:{
        

        handle_submit(){

            const _data = {
            email: this.email
            ,password: this.password
        };

            axios.post('http://localhost:3000/login', _data )
                .then(
                    res => {
                        console.log(res)
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
        }
    }
}
</script>