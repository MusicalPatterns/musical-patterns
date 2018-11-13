import { Scene } from 'three'
import { BuildVrb, Vrb } from 'vrb'

// tslint:disable-next-line:no-any
let webVr: Vrb
let scene: Scene

// tslint:disable-next-line:no-any
declare const require: any

const activator: HTMLDivElement = document.createElement('div')
document.body.appendChild(activator)
activator.innerText = 'enable immersive sound'

activator.addEventListener('click', () => {
    scene = new Scene()
    // tslint:disable-next-line:no-require-imports no-unsafe-any
    const { buildVrb }: { buildVrb: BuildVrb } = require('vrb')
    // tslint:disable-next-line:no-unsafe-any
    webVr = buildVrb({ camerasConfig: { INITIAL_PERSPECTIVE_POSITION: [ 0, 0, 0 ] }, scene })
    // tslint:disable-next-line:no-unsafe-any
    webVr.requestAnimationFrame()
})

export {
    webVr,
    scene,
}
