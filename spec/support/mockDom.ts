import {JSDOM} from 'jsdom'
import mockAudioContext from './mockAudioContext'

declare const global: any

const dom = new JSDOM('<html><body></body></html>')
global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

global.window.AudioContext = () => mockAudioContext
