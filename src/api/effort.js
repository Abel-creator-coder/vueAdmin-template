import request from '@/utils/request'

export function getInstitueList(pageNum,pageSize) {
    return request({
        url: '/effect/institute/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get',
    })
}

export function getMediaList(pageNum,pageSize) {
    return request({
        url: '/effect/media/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get',
    })
}

export function getStoryList(pageNum,pageSize) {
    return request({
        url: '/effect/story/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get',
    })
}

export function getOrgList(pageNum,pageSize) {
    return request({
        url: '/effect/org/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get',
    })
}

export function getPolicyList(pageNum,pageSize) {
    return request({
        url: '/effect/policy/page?pageNum=' + pageNum + '&pageSize=' + pageSize,
        method: 'get',
    })
}

