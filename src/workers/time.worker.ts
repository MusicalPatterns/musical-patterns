const worker: Worker = self as any

let time = 0

setInterval(() => worker.postMessage(time++), 50)

export default null as any
