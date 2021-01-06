<template>
    <div class="scroll-wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    data(){
        return {
            scroll: null
        }
    },
    mounted(){
        setTimeout(() => {
            this._initScroll();
        }, 20)
    },
    methods: {
        _initScroll(){
            if(! this.$refs.wrapper) return
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: 3,
                click: true,
            })
        }
    }
}
</script>

<style scoped>

</style>