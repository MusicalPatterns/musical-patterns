import { setupPlayroom } from '@musical-patterns/playroom'
import { patterns, patternsFilter } from './patterns'

const playroom: HTMLDivElement = setupPlayroom(patternsFilter(patterns))

document.body.appendChild(playroom)
