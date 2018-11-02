// tslint:disable:no-type-definitions-outside-types-modules variable-name no-unsafe-any

interface AudioContextConstructor {
    new (): AudioContext;
}

// @ts-ignore
const AudioContext: AudioContextConstructor = window.AudioContext || window.webkitAudioContext || false

let context: AudioContext
if (AudioContext) {
    context = new AudioContext()
}
else {
    const message: HTMLDivElement = document.createElement('div')
    document.body.appendChild(message)
    // tslint:disable-next-line:max-line-length
    message.innerText = 'Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox'
}

export {
    context,
}
