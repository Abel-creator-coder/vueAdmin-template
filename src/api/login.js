import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/Admin/Login/Login',
        method: 'post',
        data: {
            account: username,
            psd: password
        }
    })
}

export function getInfo(token) {
    return request({
        url: '/Admin/User/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/admin/login/loginout',
        method: 'post'
    })
}
