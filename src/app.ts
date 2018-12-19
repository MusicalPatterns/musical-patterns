import { setupPlayroom } from '@musical-patterns/playroom'
import { selectedPatterns } from './selectedPatterns'

setupPlayroom(selectedPatterns)
    .then((playroom: HTMLDivElement) => {
        document.body.appendChild(playroom)
    })
    .catch()
