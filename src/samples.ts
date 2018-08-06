import context from './context'

const samples: { [index: string]: AudioBuffer } = {}

declare const require: (modulePath: string) => string

const load: (sample: string) => void =
    async (sample: string): Promise<void> => {
        const request: XMLHttpRequest = new XMLHttpRequest()
        const url: string = require(`../samples/${sample}.wav`)
        request.open('GET', url, true)
        request.responseType = 'arraybuffer'

        request.onload = (): void => {
            const audioData: ArrayBuffer = request.response as ArrayBuffer
            context.decodeAudioData(audioData, (buffer: AudioBuffer): void => {
                samples[sample] = buffer
            }).then().catch()
        }
        request.send()
    }

[
    'snare',
    'kick',
    'hihat',
    'piano',
    'violin',
    'violin_staccato',
    'trombone',
    'flute',
    'cello',
    'tuba',
    'trumpet',
    'doublebass',
].forEach(load)

export default samples
