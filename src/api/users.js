import request from '@/utils/request'

// export function createadmin(adminInfo) {
//     return request({
//         url: '/admin/create',
//         method: 'post',
//         data: adminInfo
//     })
// }

export function getuserslist(options) {
    return request({
        url: '/Admin/Patient/index',
        method: 'get',
        params: options
    })
}

// export function getadmin(id) {
//     return request({
//         url: '/admin/detail',
//         method: 'get',
//         params: { id }
//     })
// }

export function delusers(id) {
    return request({
        url: '/Admin/Patient/del',
        method: 'post',
        data: { user_id: id }
    })
}
export function bitchdelusers(idArray) {
    return request({
        url: '/Admin/Patient/dellist',
        method: 'post',
        data: { idArray }
    })
}

export function searchusers(search) {
    return request({
        url: '/Admin/Patient/index',
        method: 'post',
        data: search
    })
}

export function savestep(step, info) {
    return request({
        url: '/Admin/Patient/create',
        method: 'post',
        data: {
            step: step,
            ...info
        }
    })
}

export function savesecondstep(info) {
    return request({
        url: '/Admin/Patient/info2',
        method: 'post',
        data: {
            step: 2,
            ...info
        }
    })
}

export function savethirdstep(info) {
    return request({
        url: '/Admin/Patient/info3',
        method: 'post',
        data: {
            step: 3,
            ...info
        }
    })
}

export function saveforthstep(info) {
    return request({
        url: '/Admin/Patient/info4',
        method: 'post',
        data: {
            step: 3,
            ...info
        }
    })
}

export function savesteps(info) {
    return request({
        url: '/Admin/Patient/create',
        method: 'post',
        data: info
    })
}

export function editfirststepsave(info) {
    return request({
        url: '/Admin/Patient/edit',
        method: 'post',
        data: {
            ...info
        }
    })
}

export function editstepsave(info) {
    return request({
        url: '/Admin/Patient/edit',
        method: 'post',
        data: {
            ...info
        }
    })
}

export function exportdata(info) {
    return request({
        url: '/Admin/Patient/index',
        method: 'post',
        data: {
            excel: 1,
            ...info
        }
    })
}

export function getuserdetail(id) {
    return request({
        url: '/Admin/Patient/detail',
        method: 'post',
        data: {
            id: id
        }
    })
}

export function searchenable(info) {
    return request({
        url: '/admin/Patient/create2',
        method: 'post',
        data: {
            ...info
        }
    })
}
