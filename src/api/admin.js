import request from '@/utils/request'

export function createadmin(adminInfo) {
    return request({
        url: '/Admin/User/create',
        method: 'post',
        data: adminInfo
    })
}

export function editadmin(adminInfo) {
    return request({
        url: '/Admin/User/edit',
        method: 'post',
        data: adminInfo
    })
}

export function getadminlist(options) {
    return request({
        url: '/Admin/User/team',
        method: 'get',
        params: options
    })
}

export function getadmin(id) {
    return request({
        url: '/Admin/User/index',
        method: 'get',
        params: { id }
    })
}

export function deladmin(id) {
    return request({
        url: '/Admin/User/del',
        method: 'post',
        data: { id }
    })
}
