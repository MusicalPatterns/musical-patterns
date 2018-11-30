import { patternsFilter } from '@musical-patterns/pattern'
import { setupPlayroom } from '@musical-patterns/playroom'
import { patterns } from './patterns'

const playroom: HTMLDivElement = setupPlayroom(patternsFilter(patterns))

document.body.appendChild(playroom)
