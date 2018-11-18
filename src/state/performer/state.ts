import { to } from '../../nominal'
import { immutablize } from '../immutablize'
import { ImmutablePerformerState } from './types'

const initialPerformerState: ImmutablePerformerState = immutablize({
    paused: true,
    time: to.Time(0),
})

export {
    initialPerformerState,
}
