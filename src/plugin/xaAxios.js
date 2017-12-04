import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.request.use(function (config) {
    if (config.method === 'get') {
        config.params = config.params || {}
        config.params.fromUrl = window.location.href
    } else if (config.method === 'post') {
        Object.assign(config.data, { fromUrl: window.location.href })
        config.data = qs.stringify(config.data)
    }
    return config
})
axios.interceptors.response.use(function (response) {
    if (response.data && (response.data.status || response.data.status === 0)) {
        var status = response.data.status
        switch (status) {
            case 8888:
                window.location.href = response.data.data
                return
            case 8899:
                window.history.go(-1)
                break
            case 4304:
                break
            case 4300:
                break
        }
        if (status !== 200) {
            return Promise.reject(response.data)
        }
    }
    return response
})
export function diyAction({ url, data = {}, method = 'get', type = 'json', config = {} }) {
    let baseCfg = Object.assign(Object.create(null), config)
    baseCfg.url = url
    baseCfg.method = method
    if (method === 'get') {
        baseCfg.params = data
    } else if (method === 'post') {
        baseCfg.data = data
    }
    baseCfg.responseType = type
    return axios.request(baseCfg).then(response => {
        if (!response.data.data) {
            return response.data
        }
        return response.data.data
    })
}