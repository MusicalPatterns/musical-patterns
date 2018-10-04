import { Song } from '../songTypes'
import { Entity, Timbre, Voice, VoiceType } from '../types'
import * as to from '../utilities/to'
import buildOscillatorVoice from './buildOscillatorVoice'
import buildSampleVoice from './buildSampleVoice'
import { EntityConfig } from './types'

const buildEntity: (entityConfig: EntityConfig, song: Song) => Entity =
    ({
         nextEnd = to.Time(0),
         nextStart = to.Time(0),
         noteIndex = to.Index(0),
         notes,
         timeType,
         voiceConfig: {voiceType, timbre},
         voiceGain = to.Scalar(1),
     }: EntityConfig,
     song: Song): Entity => {
        const voice: Voice = voiceType === VoiceType.SAMPLE ?
            buildSampleVoice(timbre as Timbre, song) :
            buildOscillatorVoice(timbre as OscillatorType, song)

        return {
            nextEnd,
            nextStart,
            noteIndex,
            notes,
            scales: song.scales,
            timeType,
            voice,
            voiceGain,
        }
    }

export default buildEntity
