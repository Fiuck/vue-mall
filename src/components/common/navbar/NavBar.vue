<template>
    <div class="nav-bar">
        <div class="nav-bar-left">
            <slot name="nav-bar-left"></slot>
        </div>
        <div class="nav-bar-center">
            <slot name="nav-bar-center"></slot>
        </div>
        <div class="nav-bar-right">
            <slot class="nav-bar-right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        align-items: center;
        text-align: center;
        box-shadow: 0 -1px 18px rgba(97, 91, 91, 0.1);
    }
    .nav-bar-left,.nav-bar-right {
        width: 110px;
    }
    .nav-bar-center {
        flex: 1;
    }
</style>