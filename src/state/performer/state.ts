import { to } from '@musical-patterns/utilities'
import { immutablize } from '../immutablize'
import { ImmutablePerformerState, PerformerStateKeys } from './types'

const initialPerformerState: ImmutablePerformerState = immutablize({
    [ PerformerStateKeys.PAUSED ]: true,
    [ PerformerStateKeys.TIME ]: to.Time(0),
})

export {
    initialPerformerState,
}
