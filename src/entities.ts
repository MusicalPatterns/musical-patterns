import { zdaubyaos } from '../songs/zdaubyaos/src/songs'
import buildEntity from './buildEntity'
import sequence from './sequence'
import { Entity, Song } from './types'

const entities: Entity[] = sequence([
    zdaubyaos,
].map((song: Song): Entity[] => song.map(buildEntity)))

export default entities
