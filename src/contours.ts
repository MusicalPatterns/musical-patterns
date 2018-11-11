import { Index } from './nominal'
import { ContourElement } from './types'
import { DictionaryOf } from './utilities'

const unpackContourElement: (contourElement: ContourElement) => DictionaryOf<Index> =
    (contourElement: ContourElement): DictionaryOf<Index> => ({
        duration: contourElement[ 1 ],
        pitch: contourElement[ 0 ],
    })

export {
    unpackContourElement,
}
