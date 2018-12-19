<template>
    <div class="header">
        <slot></slot>
        <i class="iconfont icon-fanhui" v-if="back" @click="goBack"><<</i>
    </div>
</template>

<script>
    export default {
        props:{
            back:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {}
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            }
        },
        computed: {},
        components: {}
    }
</script>

<style lang="less" scoped>
    .header{
        /*position: fixed;*/
        background: #2b542c;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-weight: bold;
        color: white;
        width: 100%;
    }
        i{
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
</style>
