import { Song } from '../songTypes'
import { Entity, Note, OscillatorName, Timbre, Voice, VoiceType } from '../types'
import * as to from '../utilities/to'
import buildOscillatorVoice from './buildOscillatorVoice'
import buildSampleVoice from './buildSampleVoice'
import scaleDuration from './scaleDuration'
import { EntityConfig, TimeType } from './types'

const buildEntity: (entityConfig: EntityConfig, song: Song) => Entity =
    ({
         nextEnd = to.Time(0),
         nextStart = to.Time(0),
         noteIndex = to.Index(0),
         notes = [],
         timeType = TimeType.ATOMIC,
         voiceConfig: { voiceType, timbre } = { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.SQUARE },
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
            notes: notes.map((note: Note): Note => scaleDuration(note, song.standardConfig.durationScalar)),
            scales: song.scales,
            timeType,
            voice,
            voiceGain,
        }
    }

export {
    buildEntity,
}
