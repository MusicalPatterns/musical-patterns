import { Notes } from '../songs/zdaubyaos/src/types'
import { Note } from './types'

const calculateDuration: (notes: Notes) => number =
    (notes: Notes): number =>
        notes.reduce((m: number, {duration}: Note) => m + duration, 0)

export default calculateDuration
