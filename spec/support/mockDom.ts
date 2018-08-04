import mockAudioContext from './mockAudioContext'

declare const global: any

global.AudioContext = () => mockAudioContext
