<template>
   <div>
     <p class="red">这是Home页面</p>

     <button @click="$router.push({ path: 'about' })">跳去About页面</button>

     <img src="../assets/images/more_gray_light.png" alt="" width="66">
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

<style lang="postcss" scoped>
.red {
   color: red;

   .c {
      font-size: 15px;
   }
}
</style>