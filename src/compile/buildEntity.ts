import { Entity, Timbre, Voice, VoiceType } from '../types'
import * as to from '../utilities/to'
import buildOscillatorVoice from './buildOscillatorVoice'
import buildSampleVoice from './buildSampleVoice'
import { EntityConfig } from './types'

const buildEntity: (entityConfig: EntityConfig) => Entity =
    ({
         nextEnd = to.Time(0),
         nextStart = to.Time(0),
         noteIndex = to.Index(0),
         notes,
         voiceConfig: {voiceType, timbre},
         voiceGain = to.Scalar(1),
     }: EntityConfig): Entity => {
        const voice: Voice = voiceType === VoiceType.SAMPLE ?
            buildSampleVoice(timbre as Timbre) :
            buildOscillatorVoice(timbre as OscillatorType)

        return {
            nextEnd,
            nextStart,
            noteIndex,
            notes,
            voice,
            voiceGain,
        }
    }

export default buildEntity
