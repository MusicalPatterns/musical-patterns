import { context } from './context'

const activateContextInMobileBrowserEnvironments: () => void =
    (): void => {
        document.addEventListener('touchstart', () => {
            context.resume()
        })
    }

export {
    activateContextInMobileBrowserEnvironments,
}
