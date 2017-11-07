<template>
    <div class=" xa-cell xa-align_center">
        <a class="action weui-btn weui-btn_mini weui-btn_default" @click="$emit('cancel')">
            <i class="iconfont icon-cha"> </i>
        </a>
        <div class="xa-flex-1">
            <slot></slot>
        </div>
        <a class="action weui-btn weui-btn_mini weui-btn_default xa-color-blue" @click="$emit('comfirm')">
            <i class="iconfont icon-dui"></i>
        </a>
    </div>
</template>
<style scoped>
.xa-cell {
    line-height: 40px;
    height: 40px;
    text-align: center;
    background: #fff;
    padding: 0 8px;
}

.action {
    line-height: 26px;
}
</style>