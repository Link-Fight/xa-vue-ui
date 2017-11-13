<template>
    <transition name="fade">
        <div :class="'xa-toast__' + type">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i :class="toastClass"></i>
                <slot>
                    <p class="weui-toast__content">{{content}}</p>
                </slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'loading'
        },
        content: String
    },
    computed: {
        toastClass() {
            switch (this.type) {
                case 'loading':
                    return 'weui-loading weui-icon_toast'
                case 'success':
                    return 'weui-icon-success-no-circle weui-icon_toast'
                default:
                    return ''
            }
        }
    }
}
</script>
<style scoped>
.xa-toast__msg .weui-toast {
    width: 100%;
    max-width: 280px;
    left: 50%;
    top: initial;
    margin-left: 0;
    transform: translateX(-50%);
    min-height: 1em;
    bottom: 80px;
}

.xa-toast__msg .weui-toast__content {
    margin: 4px 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>


