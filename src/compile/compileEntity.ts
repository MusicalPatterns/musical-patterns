import { SongSpec } from '../songTypes'
import { Entity, Note, OscillatorName, Timbre, Voice, VoiceType } from '../types'
import * as to from '../utilities/to'
import compileOscillatorVoice from './compileOscillatorVoice'
import compileSampleVoice from './compileSampleVoice'
import scaleDuration from './scaleDuration'
import { EntitySpec, TimeType } from './types'

const compileEntity: (entitySpec: EntitySpec, song: SongSpec) => Entity =
    ({
         nextEnd = to.Time(0),
         nextStart = to.Time(0),
         noteIndex = to.Index(0),
         notes = [],
         timeType = TimeType.ATOMIC,
         voiceSpec: { voiceType, timbre } = { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.SQUARE },
         voiceGain = to.Scalar(1),
     }: EntitySpec,
     song: SongSpec): Entity => {
        const voice: Voice = voiceType === VoiceType.SAMPLE ?
            compileSampleVoice(timbre as Timbre, song) :
            compileOscillatorVoice(timbre as OscillatorType, song)

        return {
            nextEnd,
            nextStart,
            noteIndex,
            notes: notes.map((note: Note): Note => scaleDuration(note, song.config.durationScalar)),
            scales: song.scales,
            timeType,
            voice,
            voiceGain,
        }
    }

export {
    compileEntity,
}
