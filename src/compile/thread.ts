import { to } from '../nominal'
import { OscillatorName } from '../performance'
import { Note, Thread, Voice, VoiceType } from '../types'
import { compilePart } from './part'
import { CompileThreadParameters, TimeType } from './types'
import { compileVoice } from './voice'

const compileThread: (compileEntityParameters: CompileThreadParameters) => Thread =
    ({ entity, scales }: CompileThreadParameters): Thread => {
        const {
            part = [],
            timeType = TimeType.ATOMIC,
            voiceSpec = { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.SQUARE },
        } = entity

        const voice: Voice = compileVoice(voiceSpec)
        const notes: Note[] = compilePart(part, { scales })

        return {
            nextEnd: to.Time(0),
            nextStart: to.Time(0),
            noteIndex: to.Index(0),
            notes,
            timeType,
            voice,
        }
    }

export {
    compileThread,
}
