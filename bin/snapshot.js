require('../test/support/mockDom')
const {appendFileSync, existsSync, readdirSync, statSync, unlinkSync} = require('fs')
const {join} = require('path')
const {compilePattern} = require('../src')

const updateSnapshot = async patternName => {
    const {pattern} = require(`../patterns/${patternName}/src/patterns.ts`)
    const snapshot = await compilePattern(pattern)

    const snapshotFile = `./patterns/${patternName}/test/snapshot.json`
    existsSync(snapshotFile) && unlinkSync(snapshotFile)
    appendFileSync(snapshotFile, JSON.stringify(snapshot, null, 2))
}

const patternNames = readdirSync('./patterns').filter(f => statSync(join('./patterns', f)).isDirectory())
patternNames.forEach(updateSnapshot)
