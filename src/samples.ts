import context from './context'

const samples: { [index: string]: AudioBuffer } = {}

const load: (sample: string) => void =
    async (sample: string) => {
        const request = new XMLHttpRequest()
        request.open('GET', await import(`../samples/${sample}.wav`), true)
        request.responseType = 'arraybuffer'

        request.onload = () => {
            context.decodeAudioData(request.response, buffer => {
                samples[sample] = buffer
            })
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
