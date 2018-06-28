import notes from './notes'
import voices from './voices'
import pitches from './pitches'

const BASE_GAIN = 0.1
const BASE_DURATION = 5

const buildEntity = ({notes, voice, id, noteIndex = 0, nextOnset = 0, nextOffset = 0}) => {
    const entity = {
        notes,
        voice,
        id,
        noteIndex,
        nextOffset,
        nextOnset,
    }

    entity.update = time => {
        const note = entity.notes[entity.noteIndex]

        if (time > entity.nextOnset) {
            entity.voice.oscillatorNode.frequency.value = pitches[note.pitch - 1]
            entity.voice.gainNode.gain.value = note.gain * BASE_GAIN
            console.log('entity', entity.id, 'pitch', note.pitch)

            entity.nextOnset += note.duration * BASE_DURATION
            entity.nextOffset += note.sustain * BASE_DURATION

        } else if (time > entity.nextOffset) {
            entity.voice.gainNode.gain.value = 0
            entity.nextOffset -= note.sustain * BASE_DURATION
            entity.nextOffset += note.duration * BASE_DURATION

            entity.noteIndex++
        }

        if (entity.noteIndex === entity.notes.length) entity.noteIndex = 0
    }

    return entity
}

const entities = [
    // middle
    // buildEntity({notes: notes[0], voice: voices[0], id: 0}),
    //
    // // low
    // buildEntity({notes: notes[1], voice: voices[1], id: 1}),
    //
    // // high
    // buildEntity({notes: notes[2], voice: voices[2], id: 2}),


    // bass
    // buildEntity({notes: notes[3], voice: voices[3], id: 3})


    // 24 variation entities

    // main descent
    buildEntity({notes: notes[4], voice: voices[4], id: 4}),

    // 3 - 1 backbone
    buildEntity({notes: notes[5], voice: voices[5], id: 5}),

    // first layer
    buildEntity({notes: notes[6], voice: voices[6], id: 6}),

    // second layer
    buildEntity({notes: notes[7], voice: voices[7], id: 7}),

    // third layer
    buildEntity({notes: notes[8], voice: voices[8], id: 8})
]

export {
    entities,
}
