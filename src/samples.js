import context from './context'

const samples = {}

const load = sample => {
	const request = new XMLHttpRequest()
	request.open('GET', require(`../samples/${sample}.wav`), true)
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
].forEach(load)

export default samples
