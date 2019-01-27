import {
    getuserslist,
    delusers,
    bitchdelusers,
    searchusers,
    savestep,
    exportdata,
    savesecondstep,
    savethirdstep,
    saveforthstep,
    savesteps,
    editstepsave,
    getuserdetail,
    editfirststepsave,
    searchenable
} from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
        // token: getToken(),
        // name: '',
        // avatar: '',
        // roles: []
    },

    mutations: {
        // SET_TOKEN: (state, token) => {
        //     state.token = token
        // },
        // SET_NAME: (state, name) => {
        //     state.name = name
        // },
        // SET_AVATAR: (state, avatar) => {
        //     state.avatar = avatar
        // },
        // SET_ROLES: (state, roles) => {
        //     state.roles = roles
        // }
    },

    actions: {
        GetUsersList({ commit, state }, options) {
            return new Promise((resolve, reject) => {
                getuserslist(options).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        DelUsers({ commit, state }, id) {
            return new Promise((resolve, reject) => {
                delusers(id).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        BitchDelUsers({ commit, state }, idArray) {
            return new Promise((resolve, reject) => {
                bitchdelusers(idArray).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        SearchUsers({ commit, state }, search) {
            return new Promise((resolve, reject) => {
                searchusers(search).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        FirstStepSave({ commit, state }, baseInfo) {
            return new Promise((resolve, reject) => {
                savestep(1, baseInfo).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        EditFirstStepSave({ commit, state }, baseInfo) {
            return new Promise((resolve, reject) => {
                editfirststepsave(baseInfo).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        SecondStepSave({ commit, state }, Info) {
            return new Promise((resolve, reject) => {
                savesecondstep(Info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        ThirdStepSave({ commit, state }, Info) {
            return new Promise((resolve, reject) => {
                savethirdstep(Info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        ForthStepSave({ commit, state }, Info) {
            return new Promise((resolve, reject) => {
                saveforthstep(Info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        StepSave({ commit, state }, Info) {
            return new Promise((resolve, reject) => {
                savesteps(Info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        EditStepSave({ commit, state }, Info) {
            return new Promise((resolve, reject) => {
                editstepsave(Info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        ExportData({ commit, state }, Info) {
            return new Promise((resolve, reject) => {
                exportdata(Info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetUserDetail({ commit, state }, id) {
            return new Promise((resolve, reject) => {
                getuserdetail(id).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        SearchEnable({ commit, state }, info) {
            return new Promise((resolve, reject) => {
                searchenable(info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default user
