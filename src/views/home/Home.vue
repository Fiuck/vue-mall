<template>
    <div>
        <nav-bar>
            <template #nav-bar-center>
               <span>首页</span>
            </template>
        </nav-bar>
        <h1>首页</h1>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultiData} from 'network/home'

export default {
    components: { NavBar },
    name: 'Home',
    data(){
        return {
            // result: null
            banners: null
        }
    },
    created(){
        getHomeMultiData().then(res => {
            this.banners = res.data.banner
        })
    }
}
</script>

<style>

</style>