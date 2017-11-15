/*
template
<dialogInput v-if="dialogInput.show" :title="dialogInput.title" :content="dialogInput.content" :time="dialogInput.time" :canceltext="dialogInput.canceltext" :comfirmtext="dialogInput.comfirmtext" v-model="dialogInput.value" :placeholder="dialogInput.placeholder" @close="closeDialogInput"></dialogInput>
*/
import dialogInput from '../dialog/input.vue'
export default {
    components: { dialogInput },
    data() {
        return {
            dialogInput: {
                show: false,
                title: '',
                content: '',
                time: 0,
                timeout: 0,
                todoResolve: null,
                todoReject: null,
                canceltext: '',
                comfirmtext: '',
                value: '',
                placeholder: ''
            }
        }
    },
    methods: {
        /**
         * @param {String} content
         * @param {String} title
         * @param {Number} timeout  '自动关闭时间' s
         */
        showDialogInput({ content, title = '', timeout = 0, value = '', placeholder = '请输入', canceltext = '取消', comfirmtext = '确定' }) {
            console.log(canceltext)
            return new Promise((resolve, reject) => {
                clearTimeout(this.dialogInput.timeout)
                this.dialogInput.content = content
                this.dialogInput.title = title
                this.dialogInput.canceltext = canceltext
                this.dialogInput.comfirmtext = comfirmtext
                this.dialogInput.value = value
                this.dialogInput.placeholder = placeholder
                this.dialogInput.show = true
                if (timeout > 0) {
                    this.dialogInput.time = timeout
                    this.dialogInput.timeout = setTimeout(this.closeDialogInput, timeout * 1000)
                }
                this.dialogInput.todoResolve = resolve
                this.dialogInput.todoReject = reject
            })
        },
        closeDialogInput(action = 'confrim') {
            clearTimeout(this.dialogInput.timeout)
            this.dialogInput.show = false
            if (action === 'confirm') {
                this.dialogInput.todoResolve(this.dialogInput.value)
            } else {
                this.dialogInput.todoReject()
            }
        }
    }
}