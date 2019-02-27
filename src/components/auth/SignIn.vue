<template>
    <div>
        {{ msg }} <router-link to="/" class="btn">Home</router-link>
    </div>
</template>

<script>
    export default {
        name: 'SignIn',
        data () {
            return {
                msg: 'Welcome SignIn'
            }
        },
    }
</script>