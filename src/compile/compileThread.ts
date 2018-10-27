import { to } from '../nominal'
import { Note, OscillatorName, Thread, Voice, VoiceType } from '../types'
import { compileNotes } from './compileNotes'
import { compileVoice } from './compileVoice'
import { CompileThreadParameters, TimeType } from './types'

const compileThread: (compileEntityParameters: CompileThreadParameters) => Thread =
    ({ entity, scales }: CompileThreadParameters): Thread => {
        const {
            noteSpecs = [],
            timeType = TimeType.ATOMIC,
            voiceSpec = { voiceType: VoiceType.OSCILLATOR, timbre: OscillatorName.SQUARE },
        } = entity

        const voice: Voice = compileVoice(voiceSpec)
        const notes: Note[] = compileNotes(noteSpecs, { scales })

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
