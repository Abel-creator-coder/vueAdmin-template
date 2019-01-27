import { getlocation, getage, getsex, getanalyse1data, getanalyse2data, getanalyse3data, getanalyse2result, getanalyse1result, getanalyse3result } from '@/api/analyse'
import { getToken, setToken, removeToken } from '@/utils/auth'

const analyse = {
    state: {

    },

    mutations: {

    },

    actions: {
        GetLocation({ commit }) {
            return new Promise((resolve, reject) => {
                getlocation().then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAge({ commit }) {
            return new Promise((resolve, reject) => {
                getage().then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetSex({ commit }) {
            return new Promise((resolve, reject) => {
                getsex().then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAnalyse1Data({ commit }) {
            return new Promise((resolve, reject) => {
                getanalyse1data().then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAnalyse2Data({ commit }) {
            return new Promise((resolve, reject) => {
                getanalyse2data().then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAnalyse3Data({ commit }) {
            return new Promise((resolve, reject) => {
                getanalyse3data().then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAnalyse2Result({ commit }, info) {
            return new Promise((resolve, reject) => {
                getanalyse2result(info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAnalyse3Result({ commit }, info) {
            return new Promise((resolve, reject) => {
                getanalyse3result(info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetAnalyse1Result({ commit }, info) {
            return new Promise((resolve, reject) => {
                getanalyse1result(info).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default analyse
