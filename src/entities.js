import notes from './notes'
import buildSampleVoice from './buildSampleVoice'
import buildVoice from './buildVoice'

const entities = [
    // got it
    {notes: notes.mainDescent, voice: buildSampleVoice('trombone'),voiceGain: 0.5,  id: 0, noteIndex: 0, nextOnset: 0, nextOffset: 0},
    // {notes: notes.mainDescent, voice: buildVoice('square'), id: 0, noteIndex: 0, nextOnset: 0, nextOffset: 0},

    // tuba is ... hard to tell if in tune
    {notes: notes.mainDescentContinuation, voice: buildSampleVoice('tuba'), voiceGain: 1, id: 1, noteIndex: 0, nextOnset: 0, nextOffset: 0},
    // {notes: notes.mainDescentContinuation, voice: buildVoice('sine'), id: 1, noteIndex: 0, nextOnset: 0, nextOffset: 0},

    // in tune, but obnoxiously too high so distorted
    {notes: notes.threePer, voice: buildSampleVoice('flute'), id: 2,voiceGain: .25,  noteIndex: 0, nextOnset: 0, nextOffset: 0},
    // {notes: notes.threePer, voice: buildVoice('square'), id: 2, noteIndex: 0, nextOnset: 0, nextOffset: 0},

    // seems fine
    {notes: notes.fivePer, voice: buildSampleVoice('violin'), id: 3, voiceGain: .38,  noteIndex: 0, nextOnset: 0, nextOffset: 0},
    // {notes: notes.fivePer, voice: buildVoice('square'), id: 3, noteIndex: 0, nextOnset: 0, nextOffset: 0},

    // maybe i got it now
    {notes: notes.sevenPer, voice: buildSampleVoice('trumpet'), id: 4, voiceGain: .25, noteIndex: 0, nextOnset: 0, nextOffset: 0},
    // {notes: notes.sevenPer, voice: buildVoice('square'), id: 4, noteIndex: 0, nextOnset: 0, nextOffset: 0},

    // ??
    {notes: notes.ninePer, voice: buildSampleVoice('cello'), voiceGain: .25, id: 5, noteIndex: 0, nextOnset: 0, nextOffset: 0},
    // {notes: notes.ninePer, voice: buildVoice('square'), id: 5, noteIndex: 0, nextOnset: 0, nextOffset: 0},

	// {notes: notes.backbone, voice: buildSampleVoice('piano'), voiceGain: 0.05, id: 6, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	// {notes: notes.backbone, voice: buildVoice('square'), id: 6, noteIndex: 0, nextOnset: 0, nextOffset: 0},

	// {notes: notes.kick, voice: buildSampleVoice('kick'), id: 7, voiceGain: 1, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	// {notes: notes.snare, voice: buildSampleVoice('snare'), id: 8, voiceGain: 1,  noteIndex: 0, nextOnset: 0, nextOffset: 0},
	// {notes: notes.hihat, voice: buildSampleVoice('hihat'), id: 9,voiceGain: 1,  noteIndex: 0, nextOnset: 0, nextOffset: 0},
]

export default entities
