// tslint:disable:no-any

import { DECIMAL, ONE, TWO } from '../constants'

const isCloseTo: <T>(numberOne: T, numberTwo: T) => boolean =
    <T>(numberOne: T, numberTwo: T): boolean => {
        const numberOneAsNumber: number = numberOne as any
        const numberTwoAsNumber: number = numberTwo as any

        const precision: number = TWO

        const pow: number = Math.pow(DECIMAL, precision + ONE)
        const delta: number = Math.abs(numberOneAsNumber - numberTwoAsNumber)
        const maxDelta: number = Math.pow(DECIMAL, -precision) / TWO

        return Math.round(delta * pow) / pow <= maxDelta
    }

export {
    isCloseTo,
}
