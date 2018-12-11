import { patternsFilter } from '@musical-patterns/pattern'
import { setupPlayroom } from '@musical-patterns/playroom'
import { patterns } from './patterns'

setupPlayroom(patternsFilter(patterns))
    .then((playroom: HTMLDivElement) => {
        document.body.appendChild(playroom)
    })
    .catch()
