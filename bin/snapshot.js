const {appendFileSync, existsSync, readdirSync, statSync, unlinkSync} = require('fs')
const {join} = require('path')
require('../test/support/mockDom')

const makeKey = key => key
    .replace(/build/g, '')
    .replace(/Function/g, '')
    .toLowerCase()

const updateSnapshot = async patternName => {
    const {pattern, patternSpec} = require(`../patterns/${patternName}/src/patterns.ts`)
    const snapshot = Object.entries(pattern.material).reduce(
        (accumulator, [material, buildMaterialFunction]) => ({
            ...accumulator,
            [makeKey(material)]: buildMaterialFunction(patternSpec),
        }),
        {},
    )

    const snapshotFile = `./patterns/${patternName}/test/snapshot.json`
    existsSync(snapshotFile) && unlinkSync(snapshotFile)
    appendFileSync(snapshotFile, JSON.stringify(snapshot, null, 2))
}

const patternNames = readdirSync('./patterns').filter(f => statSync(join('./patterns', f)).isDirectory())
patternNames.forEach(updateSnapshot)

process.exit()
