import {entities} from './entities'
import Time from './time.worker'
import play from './samples'

let lastKick = -5 * 8
let lastSnare = -5 * 8 * 3
let lastHihat = -5 * 3

setTimeout(() => {
	const time = new Time()
	time.onmessage = event => {
		entities.forEach(entity => entity.update(event.data))

		if (event.data > lastKick + 5 * 8) {
			lastKick += 5 * 8
			play('kick')
		}

		if (event.data > lastSnare + 5 * 8 * 3) {
			lastSnare += 5 * 8 * 3
			play('snare')
		}

		if (event.data > lastHihat + 5 * 3) {
			lastHihat += 5 * 3
			play('hihat')
		}
	}

}, 1000)
