// tslint:disable:no-require-imports no-var-requires no-any no-unsafe-any no-default-export
// @ts-ignore
const requestAnimationFrame: any = require('raf')

const worker: Worker = self as any

let previousTimestamp: number

const mainLoop: (timestamp: number) => void =
    (timestamp: number): void => {
        if (previousTimestamp) {
            worker.postMessage(timestamp - previousTimestamp)
        }
        previousTimestamp = timestamp
        requestAnimationFrame(mainLoop)
    }

requestAnimationFrame(mainLoop)

export default ((): void => undefined) as any
