import request from '@/utils/request'

export function getAptitudes(pageNum,pageSize) {
    return request({
        url: '/info/aptitude/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get'
    })
}

export function getRules(pageNum,pageSize) {
    return request({
        url: '/info/rules/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get'
    })
}
 
export function getYears(pageNum,pageSize) {
    return request({
        url: '/info/years/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get'
    })
}

export function getWorks(pageNum,pageSize) {
    return request({
        url: '/info/work/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get'
    })
}

export function getAudits(pageNum,pageSize) {
    return request({
        url: '/info/audit/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get'
    })
}

