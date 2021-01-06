<template>
    <div ref="wrapper" class="cate-wrap">
        <ul class="content">
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
            <li>10000</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Category',
    data(){
        return {
            scroll: null
        }
    },
    mounted(){
        setTimeout(() => {
            this.scroll = new BScroll(this.$refs.wrapper,{})
        },20)
    }
}
</script>

<style scoped>
    .cate-wrap {
        height: 300px;
        overflow: hidden;
    }
</style>>

</style>