<template>
    <transition name="fade">
        <div>
            <div class="weui-mask"></div>
            <div class="weui-dialog xa-input-dialog">
                <div class="weui-dialog__hd">
                    <strong class="weui-dialog__title" v-html="title"></strong>
                </div>
                <div class="weui-dialog__bd">
                    <input class="dialog_input" type="text" :value="value" @input="$emit('input',$event.target.value)" :placeholder="placeholder">
                </div>
                <div class="weui-dialog__ft">
                    <a @click="onClose('cancel')" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">{{canceltext}}</a>
                    <a @click="onClose()" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">{{comfirmtext}}
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
    props: {
        canceltext: {
            default: '取消'
        },
        comfirmtext: {
            default: '确定'
        },
        value: {},
        placeholder: {}
    },
    methods: {
        onClose(action = 'confirm') {
            clearTimeout(this.timeout)
            this.$emit('close', action)
        }
    }
}
</script>
<style scoped>
.dialog_input {
  width: 100%;
  border: none;
  line-height: 32px;
}
</style>
