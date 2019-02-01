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

export function jigoudongtai(param) {
    return request({
        url: '/main/org/page',
        method: 'get',
        params: param
    })
}
export function fazhanlicheng() {
    return request({
        url: '/main/develop/page',
        method: 'get',
        params: { pageNum: 0, pageSize: 20 }
    })
}
export function lunbo() {
    return request({
        url: '/main/banner/page',
        method: 'get',
        params: { pageNum: 0, pageSize: 20 }
    })
}
export function youqinglianjie() {
    return request({
        url: '/main/link/page',
        method: 'get',
        params: { pageNum: 0, pageSize: 20 }
    })
}
export function guwentuan() {
    return request({
        url: '/about/adviser/page',
        method: 'get',
        params: { pageNum: 0, pageSize: 30 }
    })
}
export function jizuisunshang() {
    return request({
        url: '/sys/config/about_spinal_info',
        method: 'get',
        params: { pageNum: 0, pageSize: 30 }
    })
}
export function jigoujianjie() {
    return request({
        url: '/sys/config/about_org_info',
        method: 'get',
        params: { pageNum: 0, pageSize: 30 }
    })
}
export function shipinjieshao() {
    return request({
        url: '/sys/config/main_project_info',
        method: 'get',
        params: { pageNum: 0, pageSize: 30 }
    })
}
export function mytuandui() {
    return request({
        url: '/about/team/page',
        method: 'get',
        params: { pageNum: 0, pageSize: 30 }
    })
}
export function jiagoutu() {
    return request({
        url: '/sys/config/about_team_image',
        method: 'get',
        params: { pageNum: 0, pageSize: 30 }
    })
}
export function relativekn(param) {
    return request({
        url: '/about/injury/page',
        method: 'get',
        params: param
    })
}
export function hope() {
    return request({
        url: '/pro/project/hope',
        method: 'get',
        params: { pageNum: 0, pageSize: 30 }
    })
}
