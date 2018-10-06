import { Count } from './nominalTypes'

// tslint:disable-next-line:no-magic-numbers no-any
const A_SUFFICIENT_COUNT_OF_PITCHES: Count = 81 as any

const numbers: number[] = [ ...Array(A_SUFFICIENT_COUNT_OF_PITCHES).keys() ].map((n: number): number => n + 1)

export default numbers
