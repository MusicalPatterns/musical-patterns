const MAX_PATH_LENGTH_FILTER = 9999999 // 99999999 to turn this off
const FILTER_BY_NEW_SPANNING = true
const FILTER_BY_SEMISYMMETRY = true

const HOW_MANY_ODDS = 41 // 41 gets up through 81st harmonic, for the song

const mainDescentSteps = [...Array(HOW_MANY_ODDS).keys()].map(n => (n + 1) * 2 - 1)

// FILTER_BY_NEW_SPANNING stuff
const newPathDoesNotSpanAnyPartsOfAlreadyFoundPath = (newPath, alreadyFoundPath) => {
    const alreadyFoundPathTotals = alreadyFoundPath.map((_, index) => alreadyFoundPath.slice(0,index+1).reduce((n, m) => n + m, 0))
    const newPathTotals = newPath.map((part, index) => newPath.slice(0,index+1).reduce((n, m) => n + m, 0))

    let doesNotSpan = true
    newPathTotals.forEach((newPathTotal, index) => {
        const nextNewPathTotal = newPathTotals[index + 1]
        alreadyFoundPathTotals.forEach(alreadyFoundPathTotal => {
            if (alreadyFoundPathTotal > newPathTotal && alreadyFoundPathTotal < nextNewPathTotal) {
                doesNotSpan = false
            }
        })
    })
    return doesNotSpan
}

// FILTER_BY_SEMISYMMETRY stuff
const newPathIsSemisymmetrical = (newPath) => {
    const firstHalf = newPath.slice(0,newPath.length / 2 + 1).reverse()
    const secondHalf = newPath.slice(newPath.length / 2)

    const firstHalfContour = firstHalf.map((el, idx) => el < firstHalf[idx + 1]).slice(0, firstHalf.length - 1)
    const secondHalfContour = secondHalf.map((el, idx) => el < secondHalf[idx + 1]).slice(0, secondHalf.length - 1)

    const matches = firstHalfContour.map((_, i) => firstHalfContour[i] === secondHalfContour[i])

    if (matches.every(match => !!match) || matches.every(match => !match)) {
        // console.log('new path IS semisymmetrical', newPath, 'matches', matches, 'firstHalfContour', firstHalfContour, 'secondHalfContour', secondHalfContour, 'firstHalf', firstHalf, 'secondHalf', secondHalf)
        return true
    } else {
        // console.log('new path is NOT semisymmetrical', newPath, 'matches', matches, 'firstHalfContour', firstHalfContour, 'secondHalfContour', secondHalfContour, 'firstHalf', firstHalf, 'secondHalf', secondHalf)
        return false
    }
}

const maybeAddPath = (pathsForStep, pathToMaybeAdd) => {
    if (FILTER_BY_SEMISYMMETRY && !newPathIsSemisymmetrical(pathToMaybeAdd)) return

    let doNotAdd = false
    pathsForStep.forEach(alreadyFoundPath => {
        if (!doNotAdd && FILTER_BY_NEW_SPANNING && newPathDoesNotSpanAnyPartsOfAlreadyFoundPath(pathToMaybeAdd, alreadyFoundPath)) {
            // console.log('newPath', newPath, 'failed against', alreadyFoundPath)
            doNotAdd = true
        }
    })

    if (!doNotAdd) pathsForStep.push(pathToMaybeAdd)
}

const recursiveAddAllPathsForPart = (part, currentTotal, currentPath, targetTotal, pathsForStep) => {
    const nextPath = currentPath.slice()
    nextPath.push(part)
    const nextTotal = currentTotal + part
    if (nextTotal === targetTotal) {
        maybeAddPath(pathsForStep, nextPath)
    } else if (nextTotal > targetTotal) {
        // done with this branch
    } else if (nextTotal < targetTotal) {
        addAllPaths({pathsForStep, targetTotal, currentPart: part, currentTotal: nextTotal, currentPath: nextPath})
    }
}

const addAllPaths = ({pathsForStep, targetTotal, currentPart, currentTotal, currentPath}) => {
    if (currentPath.length > MAX_PATH_LENGTH_FILTER) return

    recursiveAddAllPathsForPart(currentPart + 2, currentTotal, currentPath, targetTotal, pathsForStep)

    // no sense checking further below 1
    if (currentPart === 1) return

    recursiveAddAllPathsForPart(currentPart - 2, currentTotal, currentPath, targetTotal, pathsForStep)
}

// create variables for the interesting stuff aggregates
let threePartsToEachMainDescentStep = []
let maximumPartsToEachMainDescentStep = []
let threePartsToEachMainDescentStepContinuation = []
let maximumPartsToEachMainDescentStepContinuation = []
let resultsByCountWithinStep = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

// main process
mainDescentSteps.forEach(mainDescentStep => {
    // gather paths
    const pathsForStep = []
    const oddsLessThanStep = mainDescentSteps.filter(step => step < mainDescentStep)
    oddsLessThanStep.reverse()
    oddsLessThanStep.forEach(odd => {
        addAllPaths({pathsForStep, targetTotal: mainDescentStep, currentPart: odd, currentTotal: odd, currentPath: [odd]})
    })
    console.log('######PATHS FOR MAIN DESCENT STEP', mainDescentStep, ': ', pathsForStep.length, pathsForStep)//, '\n\n')

    // create interesting stuff across all the main descent steps from aggregating each of their paths
    if (mainDescentStep < 59) {
        threePartsToEachMainDescentStep = threePartsToEachMainDescentStep.concat(pathsForStep[0])
        maximumPartsToEachMainDescentStep = maximumPartsToEachMainDescentStep.concat(pathsForStep[pathsForStep.length - 1])
    } else {
        threePartsToEachMainDescentStepContinuation = threePartsToEachMainDescentStepContinuation.concat(pathsForStep[0])
        maximumPartsToEachMainDescentStepContinuation = maximumPartsToEachMainDescentStepContinuation.concat(pathsForStep[pathsForStep.length - 1])
    }
    pathsForStep.forEach(pathForStep => {
        const thing = resultsByCountWithinStep[pathForStep.length]

        if (thing[thing.length - 1] !== mainDescentStep) {
            thing.push(mainDescentStep)
        }
    })
})

// massage the interesting stuff and report it and export it
threePartsToEachMainDescentStep = threePartsToEachMainDescentStep.slice(2)
threePartsToEachMainDescentStep.unshift(3)
maximumPartsToEachMainDescentStep = maximumPartsToEachMainDescentStep.slice(2)
maximumPartsToEachMainDescentStep.unshift(3)
console.log('final threePartsToEachMainDescentStep', threePartsToEachMainDescentStep)
console.log('final maximumPartsToEachMainDescentStep', maximumPartsToEachMainDescentStep)
console.log('final threePartsToEachMainDescentStepContinuation', threePartsToEachMainDescentStepContinuation)
console.log('final maximumPartsToEachMainDescentStepContinuation', maximumPartsToEachMainDescentStepContinuation)
console.log('resultsByCountWithinStep', resultsByCountWithinStep)

export {
    threePartsToEachMainDescentStep,
    threePartsToEachMainDescentStepContinuation,
    maximumPartsToEachMainDescentStep,
    maximumPartsToEachMainDescentStepContinuation
}

