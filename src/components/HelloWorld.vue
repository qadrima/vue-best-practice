<template>
    <div class="hello">
        {{ msg }} {{ count }} <button @click="incrementExample" class="btn">count</button>
        <br>
        <router-link to="/signin" class="btn">SignIn</router-link>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome : '
            }
        },
        computed: {
            count(){
                return this.$store.state.example.count;
            }
        },
        methods: {
            incrementExample(){
                this.$store.dispatch('increment', {
                    amount: 10
                }).then(response => {
                    console.log(response);
                }, error => {
                    console.error(error);
                });
            }
        }
    }
</script>
<style scoped>
    .btn{
        border: 1px solid brown;
        color: antiquewhite;
        background-color: black;
    }
</style>
