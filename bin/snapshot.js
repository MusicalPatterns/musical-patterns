const rootRelativeFromRoot = '.'
const rootRelativeFromThisModule = '../'

require(`${rootRelativeFromThisModule}/test/mockDom`)
const {appendFileSync, existsSync, readdirSync, statSync, unlinkSync} = require('fs')
const {join} = require('path')
const {compilePattern} = require('@musical-patterns/compiler')

const updateSnapshot = async patternName => {
    const {pattern} = require(`${rootRelativeFromThisModule}/src/${patternName}/src/patterns.ts`)
    const snapshot = await compilePattern(pattern)

    const snapshotFile = `${rootRelativeFromRoot}/src/${patternName}/package/snapshot.json`
    existsSync(snapshotFile) && unlinkSync(snapshotFile)
    appendFileSync(snapshotFile, JSON.stringify(snapshot, null, 2))
}

const patternName = process.argv.slice(2)[0]
const patternNames = readdirSync(`${rootRelativeFromRoot}/src`)
    .filter(f => statSync(join(`${rootRelativeFromRoot}/src`, f)).isDirectory())
if (patternName === 'ALL') {
    patternNames.forEach(updateSnapshot)
} else if (patternName in patternNames){
    updateSnapshot(patternName)
} else if (!patternName) {
    console.log(`Please specify a pattern to snapshot, or use "PATTERN=ALL".`)
} else {
    console.log(`Sorry, I don't see that pattern.`)
}
