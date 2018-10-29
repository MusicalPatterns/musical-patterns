// tslint:disable no-magic-numbers

import { Cents, Scalar, to } from '../nominal'

const BASE_DURATION: Scalar = to.Scalar(7)

const CENTS_PER_SEMITONE: Cents = to.Cents(100)

export {
    BASE_DURATION,
    CENTS_PER_SEMITONE,
}
