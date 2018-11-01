// tslint:disable:no-require-imports no-var-requires no-any no-unsafe-any no-default-export
// @ts-ignore
const requestAnimationFrame: any = require('raf')

const worker: Worker = self as any

let initialTimestamp: number = 0

const mainLoop: (timestamp: number) => void =
    (timestamp: number): void => {
        if (!initialTimestamp) {
            initialTimestamp = timestamp
        }
        worker.postMessage(timestamp - initialTimestamp)
        requestAnimationFrame(mainLoop)
    }

requestAnimationFrame(mainLoop)

export default ((): void => undefined) as any
