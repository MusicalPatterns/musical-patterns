import context from './context'
import { Timbre } from './types'

// @ts-ignore
const samples: { [x in Timbre]: AudioBuffer } = {}

type ModulePath = string

declare const require: (modulePath: ModulePath) => string

const getTimbreUrl: (timbre: Timbre) => ModulePath =
    (timbre: Timbre): ModulePath => {
        let inTest: boolean = false
        Object.keys(require).forEach((key: string): void => {
            if (key === 'extensions') {
                inTest = true
            }
        })

        return inTest ? '' : require(`../samples/${timbre}.wav`)
    }

const load: (timbre: Timbre) => void =
    async (timbre: Timbre): Promise<void> => {
        const request: XMLHttpRequest = new XMLHttpRequest()
        const url: ModulePath = getTimbreUrl(timbre)
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
