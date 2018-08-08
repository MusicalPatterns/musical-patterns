import context from './context'
import { Timbre } from './types'

// @ts-ignore
const samples: { [x in Timbre]: AudioBuffer } = {}

type ModulePath = string

declare const require: (modulePath: ModulePath) => string

const load: (timbre: Timbre) => void =
    async (timbre: Timbre): Promise<void> => {
        const request: XMLHttpRequest = new XMLHttpRequest()
        const url: ModulePath = require(`../samples/${timbre}.wav`)
        request.open('GET', url, true)
        request.responseType = 'arraybuffer'

        request.onload = (): void => {
            const audioData: ArrayBuffer = request.response as ArrayBuffer
            context.decodeAudioData(audioData, (buffer: AudioBuffer): void => {
                samples[timbre] = buffer
            }).then().catch()
        }
        request.send()
    }

Object.values(Timbre).forEach(load)

export default samples
