import { InterfaceConfigEntry } from '../components/types'
import { Config } from '../songTypes'
import * as to from '../utilities/to'
import { InterfaceConfig } from './types'

const configDefaults: Config = {
    baseFrequency: to.Frequency(0),
    durationScalar: to.Scalar(1),
}

const destringifyConfig: (interfaceConfig: InterfaceConfig) => Config =
    (interfaceConfig: InterfaceConfig): Config =>
        Object
            .entries(interfaceConfig)
            .reduce(
                (destringifiedConfig: Config, [ key, val ]: InterfaceConfigEntry): Config =>
                    ({ ...destringifiedConfig, [key]: JSON.parse(val) }),
                configDefaults,
            )

export {
    destringifyConfig,
}
