// tslint:disable:no-any
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

// tslint:disable-next-line:no-default-export
export default ((): void => undefined) as any
