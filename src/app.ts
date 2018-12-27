import { setupPlayroom } from '@musical-patterns/playroom'
import { selectedPatterns } from './selectedPatterns'

const debugMode: boolean = process.env.NODE_ENV === 'development'

setupPlayroom(selectedPatterns, debugMode)
    .then((playroom: HTMLDivElement) => {
        document.body.appendChild(playroom)
    })
    .catch()
