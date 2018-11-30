require('../test/mockDom')
const {appendFileSync, existsSync, readdirSync, statSync, unlinkSync} = require('fs')
const {join} = require('path')
const {compilePattern} = require('@musical-patterns/compiler')

const updateSnapshot = async patternName => {
    const {pattern} = require(`../src/${patternName}/src/patterns.ts`)
    const snapshot = await compilePattern(pattern)

    const snapshotFile = `./src/${patternName}/dist/snapshot.json`
    existsSync(snapshotFile) && unlinkSync(snapshotFile)
    appendFileSync(snapshotFile, JSON.stringify(snapshot, null, 2))
}

const patternNames = readdirSync('./src').filter(f => statSync(join('./src', f)).isDirectory())
patternNames.forEach(updateSnapshot)
