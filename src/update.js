import { BASE_DURATION } from './constants'

const update = (entity, time) => {
	const note = entity.notes[entity.noteIndex]

	if (time > entity.nextOnset) {
		entity.voice.startNote({pitch: note.pitch, gain: note.gain})

		// console.log('entity', entity.id, 'pitch', note.pitch)

		entity.nextOnset += note.duration * BASE_DURATION
		entity.nextOffset += note.sustain * BASE_DURATION

	} else if (time > entity.nextOffset) {
		entity.voice.stopNote()

		entity.nextOffset -= note.sustain * BASE_DURATION
		entity.nextOffset += note.duration * BASE_DURATION

		entity.noteIndex++
	}

	if (entity.noteIndex === entity.notes.length) {
		// console.log('entity', entity.id, 'looped!')
		entity.noteIndex = 0
	}
}

export default update
