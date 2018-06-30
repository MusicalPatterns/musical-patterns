import entities from './entities'
import Time from './time.worker'
import play from './samples'
import update from './update'
import { BASE_DURATION } from './constants'

let lastKick = -BASE_DURATION * 8
let lastSnare = -BASE_DURATION * 8 * 3
let lastHihat = -BASE_DURATION * 1

setTimeout(() => {
	const time = new Time()
	time.onmessage = event => {
		entities.forEach(entity => update(entity, event.data))

		if (event.data > lastKick + BASE_DURATION * 8) {
			lastKick += BASE_DURATION * 8
			play('kick')
		}

		if (event.data > lastSnare + BASE_DURATION * 8 * 3) {
			lastSnare += BASE_DURATION * 8 * 3
			play('snare')
		}

		if (event.data > lastHihat + BASE_DURATION * 1) {
			lastHihat += BASE_DURATION * 1
			play('hihat')
		}
	}

}, 1000)
