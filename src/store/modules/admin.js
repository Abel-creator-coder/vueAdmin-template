import { createadmin, getadminlist, deladmin, getadmin, editadmin } from '@/api/admin'
import { getToken, setToken, removeToken } from '@/utils/auth'

const admin = {
    state: {
        adminList: [],
        total: 0
    },

    mutations: {
        SET_ADMINLIST: (state, list) => {
            state.adminList = list
        },
        SET_TOTAL: (state, total) => {
            state.total = total
        },
    },

    actions: {
        CreateAdmin({ commit }, adminInfo) {
            return new Promise((resolve, reject) => {
                createadmin(adminInfo).then(response => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        EditAdmin({ commit }, adminInfo) {
            return new Promise((resolve, reject) => {
                editadmin(adminInfo).then(response => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAdminList({ commit, state }, options) {
            return new Promise((resolve, reject) => {
                getadminlist(options).then(response => {
                    const data = response.data
                    if (data.adminList.length > 0) {
                        commit('SET_ADMINLIST', data.list)
                        commit('SET_TOTAL', data.Total)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAdmin({ commit, state }, id) {
            return new Promise((resolve, reject) => {
                getadmin(id).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        DelAdmin({ commit, state }, id) {
            return new Promise((resolve, reject) => {
                deladmin(id).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default admin
