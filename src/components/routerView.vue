<template>
<section>
    <slot>
        <router-view :interactiveService="interactiveService"></router-view>
    </slot>
    <toast v-if="toast.show" :type="toast.type" :content="toast.content"></toast>
    <alert v-if="alert.show" :title="alert.title" :content="alert.content" :time="alert.time" @close="closeAlert"></alert>
    <confirm v-if="confirm.show" :title="confirm.title" :content="confirm.content" :time="confirm.time" canceltext="123" :comfirmtext="confirm.comfirmtext" @close="closeConfirm"></confirm>
</section>
</template>
<script>
import toastMixin from './mixins/toast.js'
import alertMixin from './mixins/alert.js'
import confirmMixin from './mixins/confirm.js'
export default {
    name: 'diyRouterView',
    mixins: [toastMixin, alertMixin, confirmMixin],
    data() {
        return {
            interactiveService: () => { }
        }
    },
    methods: {
        fetchDatas: async function (promiseAction, ...arg) {
            let result
            this.showToast({ content: '正在加载...' })
            try {
                if (arg && arg.length >= 1) {
                    result = await promiseAction.apply(this, arg)
                } else {
                    result = await promiseAction()
                }
            } catch (err) {
                this.showAlert({ content: err.message })
            }
            this.closeToast()
            return result
        }
    },
    created() {
        this.interactiveService = () => this
    }
}
</script>