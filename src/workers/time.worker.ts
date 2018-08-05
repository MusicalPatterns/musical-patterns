// tslint:disable:no-any
const worker: Worker = self as any

const ATOMIC_UNIT_OF_TIME: number = 50

let time: number = 0

setInterval((): void => {
    worker.postMessage(time++)
},          ATOMIC_UNIT_OF_TIME)

export default undefined as any
