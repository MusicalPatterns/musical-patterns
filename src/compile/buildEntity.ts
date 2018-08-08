import { Entity, Timbre, Voice, VoiceType } from '../types'
import buildOscillatorVoice from './buildOscillatorVoice'
import buildSampleVoice from './buildSampleVoice'
import { EntityConfig } from './types'

const buildEntity: (entityConfig: EntityConfig) => Entity =
    ({
         nextOffset = 0,
         nextOnset = 0,
         noteIndex = 0,
         notes,
         pitches,
         voiceConfig: {voiceType, timbre},
         voiceGain = 1,
     }: EntityConfig): Entity => {
        const voice: Voice = voiceType === VoiceType.SAMPLE ?
            buildSampleVoice(timbre as Timbre) :
            buildOscillatorVoice(timbre as OscillatorType)

        return {
            nextOffset,
            nextOnset,
            noteIndex,
            notes,
            pitches,
            voice,
            voiceGain,
        }
    }

export default buildEntity
