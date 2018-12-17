<template>
    <div class="footer">
        <router-link to="/home"><span>首页</span></router-link>
        <router-link to="/list"><span>列表</span></router-link>
        <router-link to="/collect"><span>收藏</span></router-link>
        <router-link to="/add"><span>添加</span></router-link>
        <router-link to="/detail"><span>详情</span></router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped lang="less">
    .footer{
        background: #00b3ee;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        border-top: 1px solid red;
    }
    a{
        background: yellow;
        color: #00b3ee;
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
    }
    a.router-link-active{
        color: red;
    }

</style>
