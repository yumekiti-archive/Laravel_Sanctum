<template>
    <div>
        <button @click="this.get()">get</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Test',
    methods:{
        get(){
            axios
                .get('http://localhost:8000/api/')
                .then(res => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>
