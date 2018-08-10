import { Notes } from '../../songs/zdaubyaos/src/types'
import { Note } from '../types'
import * as from from './from'
import { Time } from './nominalTypes'
import * as to from './to'

const calculateNotesDuration: (notes: Notes) => Time =
    (notes: Notes): Time =>
        notes.reduce((m: Time, {duration}: Note) => to.Time(from.Time(m) + from.Time(duration)), to.Time(0))

export default calculateNotesDuration
