import { Entity, ProtoEntity } from './types'

const buildEntity: (_: ProtoEntity) => Entity =
    ({nextOffset = 0, nextOnset = 0, noteIndex = 0, notes, pitches, voice, voiceGain = 1}: ProtoEntity): Entity =>
        ({
            nextOffset,
            nextOnset,
            noteIndex,
            notes,
            pitches,
            voice,
            voiceGain,
        })

export default buildEntity
