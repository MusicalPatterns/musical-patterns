// tslint:disable:no-any
const worker: Worker = self as any

const mainLoop: (timestamp: number) => void =
    (timestamp: number): void => {
        worker.postMessage(timestamp)
        requestAnimationFrame(mainLoop)
    }

requestAnimationFrame(mainLoop)

export default undefined as any
