import { Count } from '../nominal'

// tslint:disable-next-line:no-magic-numbers no-any
const A_SUFFICIENT_COUNT_OF_PITCHES: Count = Math.pow(2, 16) as any

const numbers: number[] = [ ...Array(A_SUFFICIENT_COUNT_OF_PITCHES).keys() ]
    .map((n: number): number => n + 1)

export {
    numbers,
}
