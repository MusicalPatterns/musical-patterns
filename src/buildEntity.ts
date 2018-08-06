import buildSampleVoice from './buildSampleVoice'
import buildVoice from './buildVoice'
import { Entity, EntityConfig } from './types'

const buildEntity: (_: EntityConfig) => Entity =
    ({
         nextOffset = 0,
         nextOnset = 0,
         noteIndex = 0,
         notes,
         pitches,
         voiceConfig: {voiceType, timbre},
         voiceGain = 1,
     }: EntityConfig): Entity =>
        ({
            nextOffset,
            nextOnset,
            noteIndex,
            notes,
            pitches,
            voice: voiceType === 'sample' ? buildSampleVoice(timbre) : buildVoice(timbre as OscillatorType),
            voiceGain,
        })

export default buildEntity
