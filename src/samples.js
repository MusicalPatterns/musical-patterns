import context from './context'

const buffers = {}

const load = sample => {
	const request = new XMLHttpRequest()
	request.open('GET', require(`../samples/${sample}.wav`), true)
	request.responseType = 'arraybuffer'

	request.onload = () => {
		context.decodeAudioData(request.response, buffer => {
			buffers[sample] = buffer
		})
	}
	request.send()
}

const play = sample => {
	const source = context.createBufferSource()
	source.buffer = buffers[sample]
	// source.detune.value = -1200
	source.connect(context.destination)
	source.start(0)
}

load('snare')
load('kick')
load('hihat')

export default play
