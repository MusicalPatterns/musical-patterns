import { Dispatch } from 'redux'
import { Clock } from '../performance'
import { ActionType } from '../state'

const buildClock: (dispatch: Dispatch) => Worker =
    (dispatch: Dispatch): Worker => {
        // tslint:disable-next-line:no-unsafe-any
        const clock: Worker = new Clock()
        clock.onmessage = (event: MessageEvent): void => {
            dispatch({ type: ActionType.INCREMENT_TIME, data: event.data })
        }

        return clock
    }

export {
    buildClock,
}
