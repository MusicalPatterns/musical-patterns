import { ActionType } from '../interface/actions'
import { store } from '../interface/store'
import * as from from '../utilities/from'
import { Time } from '../utilities/nominalTypes'
import * as to from '../utilities/to'
import Clock from './clock.worker'

// tslint:disable-next-line:no-unsafe-any
let clock: Worker = new Clock()

const songLoop: () => void = (): void => {
    let atomicTime: Time = to.Time(0)

    clock.terminate()

    // tslint:disable-next-line:no-unsafe-any
    clock = new Clock()

    clock.onmessage = (event: MessageEvent): void => {
        atomicTime = to.Time(from.Time(atomicTime) + 1)
        const rawTime: Time = event.data as Time
        store.dispatch({type: ActionType.UPDATE, data: {rawTime, atomicTime}})
    }
}

export {
    songLoop,
}
