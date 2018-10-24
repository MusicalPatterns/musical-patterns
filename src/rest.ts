import { Contour } from '../songs/zdaubyaos/src/types'
import { Index } from './utilities/nominalTypes'
import * as to from './utilities/to'

const rest: (duration: Index) => Contour =
    (duration: Index): Contour =>
        [ [ to.Index(0), duration ] ]

export default rest
