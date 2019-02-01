import { login, logout, getInfo, jigoudongtai, fazhanlicheng, lunbo, youqinglianjie, guwentuan, jizuisunshang, jigoujianjie } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        roles: [],
        type: ""
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_TYPE: (state, type) => {
            state.type = type
        }
    },

    actions: {
        // 登录
        Login({ commit }, userInfo) {
            const username = userInfo.account.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.psd).then(response => {
                    const data = response.data
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const data = response.data
                    if (data.roles && data.roles[0] == "admin") {
                        commit('SET_TYPE', "平台管理员")
                    } else if (data.roles && data.roles[0] == "hospital_operator") {
                        commit('SET_TYPE', "医院管理员")
                    } else if (data.roles && data.roles[0] == "doctor") {
                        commit('SET_TYPE', "医院用户")
                    }
                    if (data.roles && data.roles.length > 0) {
                        commit('SET_ROLES', data.roles)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Getjigoudongtai({ commit }, param) {
            return new Promise((resolve, reject) => {
                jigoudongtai(param).then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Getfazhanlicheng({ commit }) {
            return new Promise((resolve, reject) => {
                fazhanlicheng().then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Getlunbo({ commit }) {
            return new Promise((resolve, reject) => {
                lunbo().then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Getyouqinglianjie({ commit }) {
            return new Promise((resolve, reject) => {
                youqinglianjie().then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Getguwentuan({ commit }) {
            return new Promise((resolve, reject) => {
                guwentuan().then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Getjizuisunshang({ commit }) {
            return new Promise((resolve, reject) => {
                jizuisunshang().then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        Getjigoujianjie({ commit }) {
            return new Promise((resolve, reject) => {
                jigoujianjie().then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default user
