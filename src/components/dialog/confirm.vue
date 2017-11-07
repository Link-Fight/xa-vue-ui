<template>
    <transition name="fade">
        <div>
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd">
                    <strong class="weui-dialog__title" v-html="title"></strong>
                </div>
                <div class="weui-dialog__bd" v-html="content"></div>
                <div class="weui-dialog__ft">
                    <a @click="onClose('cancel')" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
                    <a @click="onClose()" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">确定
                        <template v-if="time>0">
                            ({{mTime}})
                        </template>
                    </a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import alert from './alert.vue'
export default {
    name: 'confirm',
    extends: alert,
    methods: {
        onClose(action = 'confirm') {
            clearTimeout(this.timeout)
            this.$emit('close', action)
        }
    }
}
</script>

