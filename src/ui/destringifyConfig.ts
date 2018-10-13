import { Config } from '../songTypes'
import { StringifiedConfig, StringifiedConfigEntry } from '../state/state'
import * as to from '../utilities/to'

const configDefaults: Config = {
    baseFrequency: to.Frequency(0),
    durationScalar: to.Scalar(1),
}

const destringifyConfig: (displayedConfig: StringifiedConfig) => Config =
    (displayedConfig: StringifiedConfig): Config =>
        Object
            .entries(displayedConfig)
            .reduce(
                (destringifiedConfig: Config, [ key, val ]: StringifiedConfigEntry): Config =>
                    ({ ...destringifiedConfig, [key]: JSON.parse(val) }),
                configDefaults,
            )

export {
    destringifyConfig,
}
