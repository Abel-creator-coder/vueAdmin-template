import request from '@/utils/request'

export function getlocation() {
    return request({
        url: '/Admin/patient/diqu',
        method: 'get'
    })
}

export function getage() {
    return request({
        url: '/Admin/patient/agelist',
        method: 'get'
    })
}

export function getsex() {
    return request({
        url: '/Admin/patient/sexlist',
        method: 'get'
    })
}

export function getanalyse1data() {
    return request({
        url: '/Admin/patient/analysis2',
        method: 'get'
    })
}

export function getanalyse2data() {
    return request({
        url: '/Admin/patient/analysis',
        method: 'get'
    })
}

export function getanalyse3data() {
    return request({
        url: '/Admin/patient/abnormal',
        method: 'get'
    })
}

export function getanalyse2result(info) {
    return request({
        baseURL: 'http://39.106.57.67:80',
        url: '/chi-square/',
        method: 'post',
        data: info
    })
}

export function getanalyse3result(info) {
    return request({
        baseURL: 'http://39.106.57.67:80',
        url: '/t/',
        method: 'post',
        data: info
    })
}

export function getanalyse1result(info) {
    return request({
        baseURL: 'http://39.106.57.67:80',
        url: '/logistic/',
        method: 'post',
        data: info
    })
}
