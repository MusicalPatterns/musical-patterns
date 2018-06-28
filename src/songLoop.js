import {entities} from './entities'
import Time from './time.worker'

const time = new Time()
time.onmessage = event => {
    entities.forEach(entity => entity.update(event.data))
}
