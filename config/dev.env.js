'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
    // BASE_API: '"https://easy-mock.com/mock/5b0c03b31725f034fca4ccd3/hospital"',
    BASE_API: '"http://admin.nifund.org/admin-api"',
    useEslint: false
})
