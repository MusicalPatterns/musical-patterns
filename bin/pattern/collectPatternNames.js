const { ROOT_RELATIVE_FROM_ROOT } = require('../constants')
const { join } = require('path')

const {readdirSync, statSync} = require('fs')

const collectPatternNames = () => {
    return readdirSync(`${ROOT_RELATIVE_FROM_ROOT}/src`)
        .filter(f => statSync(join(`${ROOT_RELATIVE_FROM_ROOT}/src`, f)).isDirectory())
}

module.exports = {
    collectPatternNames,
}
