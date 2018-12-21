const { ROOT_RELATIVE_FROM_ROOT, ROOT_RELATIVE_FROM_THIS_MODULE } = require('./constants')
require(`${ROOT_RELATIVE_FROM_THIS_MODULE}/test/mockDom`)
const { collectPatternNames } = require('./pattern')
const { appendFileSync, existsSync, unlinkSync } = require('fs')
const { compilePattern } = require('@musical-patterns/compiler')

const updateSnapshot = async patternName => {
    const { pattern } = require(`${ROOT_RELATIVE_FROM_THIS_MODULE}/src/${patternName}/src/patterns.ts`)
    const snapshot = await compilePattern(pattern)

    const snapshotFile = `${ROOT_RELATIVE_FROM_ROOT}/src/${patternName}/package/snapshot.json`
    existsSync(snapshotFile) && unlinkSync(snapshotFile)
    appendFileSync(snapshotFile, JSON.stringify(snapshot, null, 2))
}

const patternName = process.argv.slice(2)[ 0 ]
const patternNames = collectPatternNames()
if (patternName === 'ALL') {
    patternNames.forEach(updateSnapshot)
}
else if (patternNames.includes(patternName)) {
    updateSnapshot(patternName)
}
else if (!patternName) {
    console.log(`Please specify a pattern to snapshot, or use "PATTERN=ALL".`)
    process.exit(1)
}
else {
    console.log(`Sorry, I don't see that pattern.`)
    process.exit(1)
}
