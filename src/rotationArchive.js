// const checkIfRotationByAmount = ({a, b, amount}) => {
//     console.log('ever checked')
//     let isNotRotationByThisAmount = false
//
//     a.forEach((_, index) => {
//         let bIndex
//         if (index + amount > b.length) {
//             bIndex = index + amount - b.length
//         } else {
//             bIndex = index + amount
//         }
//         if (a[index] !== b[bIndex]) {
//             isNotRotationByThisAmount = true
//         }
//     })
//
//     return !isNotRotationByThisAmount
// }

// const newPathIsARotationOfAlreadyFoundPath = (newPath, alreadyFoundPath) => {
//     if (newPath.length !== alreadyFoundPath.length) return false
//
//     const indices = [...Array(newPath.length).keys()]
//     let isARotation = false
//     indices.forEach(index => {
//         if (checkIfRotationByAmount({a: newPath, b: alreadyFoundPath, amount: index})) {
//             console.log('newPath', newPath, 'failed against', alreadyFoundPath)
//             isARotation = true
//         }
//     })
//     return isARotation
// }


// const maybeAddPath = (pathsForStep, pathToMaybeAdd) => {
//     if (FILTER_BY_SEMISYMMETRY && !newPathIsSemisymmetrical(pathToMaybeAdd)) return
//
//     let doNotAdd = false
//     pathsForStep.forEach(alreadyFoundPath => {
//         if (!doNotAdd && FILTER_BY_NEW_SPANNING && newPathDoesNotSpanAnyPartsOfAlreadyFoundPath(pathToMaybeAdd, alreadyFoundPath)) {
//             // console.log('newPath', newPath, 'failed against', alreadyFoundPath)
//             doNotAdd = true
//         }
//         // dont think this one makes sense so temp muting it
//         // if (!doNotAdd && newPathIsARotationOfAlreadyFoundPath(pathToMaybeAdd, alreadyFoundPath)) {
//         //     doNotAdd = true
//         // }
//     })
//
//     if (!doNotAdd) pathsForStep.push(pathToMaybeAdd)
// }