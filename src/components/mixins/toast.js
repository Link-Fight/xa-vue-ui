/*
template
<toast v-if="toast.show" :type="toast.type" :content="toast.content"></toast>
*/
import toast from '@/components/toast'
export default {
    components: { toast },
    data() {
        return {
            toast: {
                show: false,
                type: '',
                content: '',
                timeout: 0
            }
        }
    },
    methods: {
        /**
         * @param {String} content  '显示的提示'
         * @param {String} type 'loading/success/msg'
         * @param {Number} timeout  '自动关闭时间'
         */
        showToast({content, type = 'loading', timeout = 0}) {
            if (type === 'loading') {
                content = content || '正在加载...'
            }
            return new Promise((resolve, reject) => {
                clearTimeout(toast.timeout)
                this.toast.type = type
                this.toast.content = content
                this.toast.show = true
                if (timeout > 0) {
                    this.toast.timeout = setTimeout(this.closeToast, timeout)
                }
                resolve({
                    close: this.closeToast
                })
            })
        },
        closeToast() {
            clearTimeout(toast.timeout)
            this.toast.show = false
        }
    }
}