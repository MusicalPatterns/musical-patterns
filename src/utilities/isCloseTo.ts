// tslint:disable:no-any

import { DECIMAL, DEFAULT_PRECISION, HALF } from '../constants'
import { applyScale } from './applyScale'

const isCloseTo: <T>(numberOne: T, numberTwo: T) => boolean =
    <T>(numberOne: T, numberTwo: T): boolean => {
        const numberOneAsNumber: number = numberOne as any
        const numberTwoAsNumber: number = numberTwo as any

        const precision: number = DEFAULT_PRECISION

        const pow: number = Math.pow(DECIMAL, precision + 1)
        const delta: number = Math.abs(numberOneAsNumber - numberTwoAsNumber)
        const maxDelta: number = applyScale(Math.pow(DECIMAL, -precision), HALF)

        return Math.round(delta * pow) / pow <= maxDelta
    }

export {
    isCloseTo,
}
