import { Config } from '../songTypes'
import { StringifiedConfig } from '../state/state'

const displayedConfigDefaults: StringifiedConfig = {
}

const stringifyConfig: (config: Config) => StringifiedConfig =
    (config: Config): StringifiedConfig =>
        Object
            .entries(config)
            .reduce(
                (stringifiedConfig: StringifiedConfig, [ key, val ]: [string, string]): StringifiedConfig =>
                    ({ ...stringifiedConfig, [key]: JSON.stringify(val) }),
                displayedConfigDefaults,
            )

export {
    stringifyConfig,
}
