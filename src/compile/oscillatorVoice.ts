import { Object3D, PositionalAudio } from 'three'
import { X_AXIS, Y_AXIS, Z_AXIS } from '../constants'
import { from } from '../nominal'
import { context, NoteToPlay, scene, StartNote, StopNote, webVr } from '../performance'
import { SpatializationType, Voice } from '../types'
import { applyScale, dereference } from '../utilities'
import { BASE_GAIN } from './constants'
import { CompileOscillatorVoiceParameters } from './types'

// tslint:disable-next-line:no-type-definitions-outside-types-modules
const compileOscillatorVoice: (compileOscillatorVoiceParameters: CompileOscillatorVoiceParameters) => Voice =
    ({ spatialization, timbre }: CompileOscillatorVoiceParameters): Voice => {
        let oscillatorNode: OscillatorNode
        let gainNode: GainNode

        let positionNode: Object3D
        let positionalSound: PositionalAudio
        if (spatialization === SpatializationType.IMMERSIVE && webVr) {
            positionNode = new Object3D()
            scene.add(positionNode)
        }

        const startNote: StartNote = ({ frequency, gain, position }: NoteToPlay): void => {
            if (spatialization === SpatializationType.IMMERSIVE && webVr) {
                // tslint:disable-next-line:no-unsafe-any
                positionalSound = webVr.createPositionalSound()
                positionNode.add(positionalSound)
                gainNode = positionalSound.getOutput()
                // tslint:disable-next-line:no-unsafe-any
                oscillatorNode = webVr.createSpatialOscillator()

                positionNode.position.set(
                    from.CoordinateElement(dereference(position, X_AXIS)),
                    from.CoordinateElement(dereference(position, Y_AXIS)),
                    from.CoordinateElement(dereference(position, Z_AXIS)),
                )

                oscillatorNode.connect(gainNode)
                oscillatorNode.type = timbre
                oscillatorNode.start()
                oscillatorNode.frequency.value = from.Frequency(frequency)
                // @ts-ignore
                positionalSound.setNodeSource(oscillatorNode)
                positionalSound.setVolume(from.Scalar(applyScale(gain, BASE_GAIN)))
            }
            else {
                oscillatorNode = context.createOscillator()
                gainNode = context.createGain()
                gainNode.connect(context.destination)
                oscillatorNode.connect(gainNode)
                oscillatorNode.type = timbre
                oscillatorNode.start()
                oscillatorNode.frequency.value = from.Frequency(frequency)
                gainNode.gain.value = from.Scalar(applyScale(gain, BASE_GAIN))
            }
        }

        const stopNote: StopNote = (): void => {
            if (positionalSound) {
                positionNode.remove(positionalSound)
            }
            if (oscillatorNode) {
                oscillatorNode.disconnect()
            }
            if (gainNode) {
                gainNode.disconnect()
            }
        }

        return {
            startNote,
            stopNote,
        }
    }

export {
    compileOscillatorVoice,
}
