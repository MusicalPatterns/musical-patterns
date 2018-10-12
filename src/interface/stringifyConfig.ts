import { Config } from '../songTypes'
import { InterfaceConfig } from './state'

const interfaceConfigDefaults: InterfaceConfig = {
}

const stringifyConfig: (config: Config) => InterfaceConfig =
    (config: Config): InterfaceConfig =>
        Object
            .entries(config)
            .reduce(
                (stringifiedConfig: InterfaceConfig, [ key, val ]: [string, string]): InterfaceConfig =>
                    ({ ...stringifiedConfig, [key]: JSON.stringify(val) }),
                interfaceConfigDefaults,
            )

export {
    stringifyConfig,
}
