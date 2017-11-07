<template>
    <transition name="fade">
        <div>
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd">
                    <strong class="weui-dialog__title" v-html="title"></strong>
                </div>
                <slot>
                    <div class="weui-dialog__bd" v-html="content"></div>
                </slot>
                <div class="weui-dialog__ft">
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
export default {
    name: 'alert',
    data() {
        return {
            timeout: 0,
            mTime: 0
        }
    },
    props: {
        title: String,
        content: {},
        time: Number
    },
    methods: {
        onClose() {
            clearTimeout(this.timeout)
            this.$emit('close')
        }
    },
    mounted() {
        if (this.time > 0) {
            this.mTime = this.time
            let toDo = () => {
                if (this.mTime > 0) {
                    this.mTime--
                    this.timeout = setTimeout(toDo, 1000)
                } else {
                    this.onClose()
                }
            }
            this.timeout = setTimeout(toDo, 1000)
        }
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


