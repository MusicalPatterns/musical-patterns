import notes from './notes'
import buildSampleVoice from './buildSampleVoice'

const entities = [
	{notes: notes.mainDescent, voice: buildSampleVoice('violin'), id: 0, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.mainDescentContinuation, voice: buildSampleVoice('violin'), id: 1, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.threePer, voice: buildSampleVoice('violin'), id: 2, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.fivePer, voice: buildSampleVoice('violin'), id: 3, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.sevenPer, voice: buildSampleVoice('violin'), id: 4, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.ninePer, voice: buildSampleVoice('violin'), id: 5, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.backbone, voice: buildSampleVoice('violin'), id: 6, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.kick, voice: buildSampleVoice('kick'), id: 7, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.snare, voice: buildSampleVoice('snare'), id: 7, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.hihat, voice: buildSampleVoice('hihat'), id: 7, noteIndex: 0, nextOnset: 0, nextOffset: 0},
]

export default entities
