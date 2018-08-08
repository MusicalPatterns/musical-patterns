import context from './context'
import { Timbre } from './types'

const samples: { [index: string]: AudioBuffer } = {}

declare const require: (modulePath: string) => string

const load: (timbre: Timbre) => void =
    async (timbre: Timbre): Promise<void> => {
        const request: XMLHttpRequest = new XMLHttpRequest()
        const url: string = require(`../samples/${timbre}.wav`)
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
