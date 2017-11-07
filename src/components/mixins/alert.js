/*
template
<alert v-if="alert.show" :title="alert.title" :content="alert.content" :time="alert.time" @close="closeAlert"></alert>
*/
import alert from '@/components/dialog/alert'
export default {
    components: { alert },
    data() {
        return {
            alert: {
                show: false,
                title: '',
                content: '',
                time: 0,
                timeout: 0
            }
        }
    },
    methods: {
        /**
         * @param {String} content
         * @param {String} title
         * @param {Number} timeout  '自动关闭时间' s
         */
        showAlert({content, title = '', timeout = 0}) {
            return new Promise((resolve, reject) => {
                clearTimeout(alert.timeout)
                this.alert.content = content
                this.alert.title = title
                this.alert.show = true
                if (timeout > 0) {
                    this.alert.time = timeout
                    this.alert.timeout = setTimeout(this.closeAlert, timeout * 1000)
                }
                resolve({
                    close: this.closeAlert
                })
            })
        },
        closeAlert() {
            clearTimeout(alert.timeout)
            this.alert.show = false
        }
    }
}