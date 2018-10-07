import { CustomConfig } from '../songTypes'

const defaultHandleCustomConfigChange: (customConfigKey: string, customConfigValue: string) => Partial<CustomConfig> =
    (customConfigKey: string, customConfigValue: string): Partial<CustomConfig> =>
        ({})

export {
    defaultHandleCustomConfigChange,
}
