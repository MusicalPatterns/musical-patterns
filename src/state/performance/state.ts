import { to } from '../../nominal'
import { immutablize } from '../immutablize'
import { ImmutablePerformanceState } from './types'

const initialPerformance: ImmutablePerformanceState = immutablize({
    atomicTime: to.Time(0),
    clock: undefined,
    paused: true,
    rawTime: to.Time(0),
    threads: [],
})

export {
    initialPerformance,
}
