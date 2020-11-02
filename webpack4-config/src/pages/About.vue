<template>
   <div>
     <p>这是about页面</p> 

     <button @click="$router.push({ path: '/' })">跳去Home页面</button>

     <img src="../assets/images/success.png" alt="" width="120">
   </div>
</template>

<script>
export default {
    components: {
    },
    props: {
    },
    data () {
       return {
       }
    },
    computed: {
    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
};
</script>

<style scoped>

</style>