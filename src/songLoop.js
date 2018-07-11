import entities from './entities'
import Time from './time.worker'
import update from './update'

setTimeout(() => {
	const time = new Time()
	time.onmessage = event => {
		entities.forEach(entity => update(entity, event.data))
	}
}, 1000)
