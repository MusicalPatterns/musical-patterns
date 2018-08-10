import { Contour } from '../songs/zdaubyaos/src/types'
import { Time } from './utilities/nominalTypes'
import * as to from './utilities/to'

const rest: (duration: Time) => Contour =
    (duration: Time): Contour =>
        [[to.Index(0), duration]]

export default rest
