import pitches from './pitches'
import { BASE_DURATION, BASE_GAIN } from './constants'

const update = (entity, time) => {
	const note = entity.notes[entity.noteIndex]

	if (time > entity.nextOnset) {
		entity.voice.oscillatorNode.frequency.value = pitches[note.pitch - 1]
		entity.voice.gainNode.gain.value = note.gain * BASE_GAIN
		if (entity.id < 2) console.log('entity', entity.id, 'pitch', note.pitch)

		entity.nextOnset += note.duration * BASE_DURATION
		entity.nextOffset += note.sustain * BASE_DURATION

	} else if (time > entity.nextOffset) {
		entity.voice.gainNode.gain.value = 0
		entity.nextOffset -= note.sustain * BASE_DURATION
		entity.nextOffset += note.duration * BASE_DURATION

		entity.noteIndex++
	}

	if (entity.noteIndex === entity.notes.length) {
		if (entity.id < 6) console.log('entity', entity.id, 'looped!')
		entity.noteIndex = 0
	}
}

export default update
