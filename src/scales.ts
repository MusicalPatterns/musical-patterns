import { OCTAVE } from './constants'
import { Offset, Power, Scalar, to } from './nominal'
import { Scale } from './types'
import { applyOffset, numbers, raise } from './utilities'

// tslint:disable-next-line:no-any no-magic-numbers
const POWER_OFFSET: Offset = -1 as any

const subharmonicSeriesScale: Scale = {
    scalars: numbers.map((n: number): Scalar => to.Scalar(1 / n)),
}

const harmonicSeriesScale: Scale = {
    scalars: numbers.map((n: number): Scalar => to.Scalar(n)),
}

const flatDurationsScale: Scale = harmonicSeriesScale

const octaveSeriesScale: Scale = {
    scalars: numbers.map(to.Power).map((power: Power): Scalar =>
        raise(OCTAVE, applyOffset(power, POWER_OFFSET))),
}

export {
    subharmonicSeriesScale,
    harmonicSeriesScale,
    flatDurationsScale,
    octaveSeriesScale,
}
