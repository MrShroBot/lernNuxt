<template>
    <div class="container">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input class="input" type="text" placeholder="Find a repository" v-model="message">
            </div>
            <div class="control">
                <a class="button is-info" @click="send">
                    Send
                </a>
            </div>
        </div>
        <ul>
            <li v-for="msg in messages"> {{ msg.text }}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    created() {
        setInterval(() => {
            axios.get('http://localhost:3001/api/messages').then(res => {
                this.messages = res.data;
            });
        },1000 )
    },
    data() {
        return {
            message: '',
            messages: []
        }
    },
    methods: {
        send() {
            axios.post('http://localhost:3001/api/messages', {
                message: this.message
            }).then(res => {
                console.log(res.data);
                this.message = '';
            });
        }
    }
}
</script>