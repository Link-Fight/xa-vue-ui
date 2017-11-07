<template>
<section>
    <!-- <router-view :interactiveService="interactiveService"></router-view> -->
    <div class="com-wrap xa-cell" v-for="toast in toasts" :key="toast" @click="onShowToast(toast)">
        <div class="xa-flex-1">toast</div>
        <div>{{toast}}</div>
    </div>
    <div class="com-wrap xa-cell"  @click="onShowAlert()">
        <div class="xa-flex-1">alert</div>
    </div>
    <div class="com-wrap xa-cell"  @click="onShowConfirm()">
        <div class="xa-flex-1">confirm</div>
    </div>
    <toast v-if="toast.show" :type="toast.type" :content="toast.content"></toast>
    <alert v-if="alert.show" :title="alert.title" :content="alert.content" :time="alert.time" @close="closeAlert"></alert>
    <confirm v-if="confirm.show" :title="confirm.title" :content="confirm.content" :time="confirm.time" @close="closeConfirm"></confirm>
</section>
</template>
<script>
import toastMixin from '@/components/mixins/toast.js'
import alertMixin from '@/components/mixins/alert.js'
import confirmMixin from '@/components/mixins/confirm.js'
const toastConfig = {
    loading: { content: 'toast', type: 'loading', timeout: 1000 },
    msg: { content: 'toast', type: 'msg', timeout: 1000 },
    success: { content: 'toast', type: 'success', timeout: 1000 }
}
export default {
    name: 'diyRouter',
    mixins: [toastMixin, alertMixin, confirmMixin],
    data() {
        return {
            toasts: ['loading', 'msg', 'success'],
            interactiveService: () => { }
        }
    },
    methods: {
        onShowToast(type) {
            this.showToast(toastConfig[type])
        },
        onShowAlert() {
            this.showAlert({ content: 'alert', title: 'xa', timeout: 3 })
        },
        onShowConfirm() {
            this.showConfirm({ content: 'confirm', title: 'xa', timeout: 3 }).then(() => console.log('success'), () => console.log('err'))
        },
        fetchDatas: async function (promiseAction, ...arg) {
            let result
            this.showToast('正在加载...')
            try {
                if (arg && arg.length >= 1) {
                    result = await promiseAction.apply(this, arg)
                } else {
                    result = await promiseAction()
                }
            } catch (err) {
                this.showAlert(err.msg)
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