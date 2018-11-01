import { OCTAVE } from './constants'
import { from, Power, Scalar, to } from './nominal'
import { Scale } from './types'
import { applyPower, DictionaryOf, numbers, offsetFromOneIndexedToZeroIndexed } from './utilities'

const buildStandardScales: () => DictionaryOf<Scale> =
    (): DictionaryOf<Scale> => {
        const subharmonicSeriesScale: Scale = {
            scalars: numbers.map((n: number): Scalar => to.Scalar(1 / n)),
        }

        const harmonicSeriesScale: Scale = {
            scalars: numbers.map((n: number): Scalar => to.Scalar(n)),
        }

        const flatDurationsScale: Scale = harmonicSeriesScale

        const octaveSeriesScale: Scale = {
            scalars: numbers
                .map(to.Power)
                .map((power: Power): Scalar =>
                    applyPower(
                        OCTAVE,
                        to.Power(from.Index(offsetFromOneIndexedToZeroIndexed(to.Index(from.Power(power))))),
                    ),
                ),
        }

        return {
            flatDurationsScale,
            harmonicSeriesScale,
            octaveSeriesScale,
            subharmonicSeriesScale,
        }
    }

export {
    buildStandardScales,
}
