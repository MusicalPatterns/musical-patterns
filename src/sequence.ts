const sequence: (arrayOfArrays: any[]) => any[] =
    (arrayOfArrays: any[]) => {
        return arrayOfArrays.reduce((n, m) => n.concat(m), [])
    }

export default sequence
