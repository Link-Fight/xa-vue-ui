/*
template
<confirm v-if="confirm.show" :title="confirm.title" :content="confirm.content" :time="confirm.time" :canceltext="confirm.canceltext" :comfirmtext="confirm.comfirmtext" @close="closeConfirm"></confirm>
*/
import confirm from '../dialog/confirm.vue'
export default {
    components: { confirm },
    data() {
        return {
            confirm: {
                show: false,
                title: '',
                content: '',
                time: 0,
                timeout: 0,
                todoResolve: null,
                todoReject: null,
                canceltext: '',
                comfirmtext: ''
            }
        }
    },
    methods: {
        /**
         * @param {String} content
         * @param {String} title
         * @param {Number} timeout  '自动关闭时间' s
         */
        showConfirm({ content, title = '', timeout = 0, canceltext = '取消', comfirmtext = '确定' }) {
            console.log(canceltext)
            return new Promise((resolve, reject) => {
                clearTimeout(this.confirm.timeout)
                this.confirm.content = content
                this.confirm.title = title
                this.confirm.canceltext = canceltext
                this.confirm.comfirmtext = comfirmtext
                this.confirm.show = true
                if (timeout > 0) {
                    this.confirm.time = timeout
                    this.confirm.timeout = setTimeout(this.closeConfirm, timeout * 1000)
                }
                this.confirm.todoResolve = resolve
                this.confirm.todoReject = reject
            })
        },
        closeConfirm(action = 'confrim') {
            clearTimeout(this.confirm.timeout)
            this.confirm.show = false
            if (action === 'confirm') {
                this.confirm.todoResolve()
            } else {
                this.confirm.todoReject()
            }
        }
    }
}