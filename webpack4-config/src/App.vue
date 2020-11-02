<template>
   <div>
     <router-view></router-view>
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
          info: {}
       }
    },
    computed: {
    },
    created () {
    },
    mounted () {
      //  测试es6语法
      let a = {
         name: 1
      }

      this.info = {
         age: 10,
         ...a
      }

      this.init()
    },
    methods: {

       async init() {
          const result = await setTimeout(() => { return 22222 }, 1000)
          console.log(result)
       }
    }
};
</script>

<style scoped>

</style>