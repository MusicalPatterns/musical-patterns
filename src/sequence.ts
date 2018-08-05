const sequence: <T>(_: T[][]) => T[] =
    <T>(arrayOfArrays: T[][]): T[] =>
        arrayOfArrays.reduce((n: T[], m: T[]): T[] =>
            n.concat(m),     [])

export default sequence
