import { HARMONIC_SHIFT } from './constants'
import numbers from './numbers'

const subharmonicSeriesPitches: number[] = numbers.map((n: number): number => 1 / (n + HARMONIC_SHIFT))

const harmonicSeriesPitches: number[] = numbers.map((n: number): number => (n + HARMONIC_SHIFT))

export {
    subharmonicSeriesPitches,
    harmonicSeriesPitches,
}
