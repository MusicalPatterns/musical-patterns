import notes from './notes'
import buildVoice from './buildVoice'

const entities = [
	{notes: notes.mainDescent, voice: buildVoice('square'), id: 0, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.mainDescentContinuation, voice: buildVoice('square'), id: 1, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.threePer, voice: buildVoice('sawtooth'), id: 2, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.fivePer, voice: buildVoice('triangle'), id: 3, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.sevenPer, voice: buildVoice('triangle'), id: 4, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.ninePer, voice: buildVoice('sawtooth'), id: 5, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.backbone, voice: buildVoice('sine'), id: 6, noteIndex: 0, nextOnset: 0, nextOffset: 0},
]

export default entities
