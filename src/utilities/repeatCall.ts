const repeatCall: <T>(arrayFunction: () => T[], times: number) => T[] =
    <T>(arrayFunction: () => T[], times: number): T[] => {
        let output: T[] = []
        for (let i: number = 0; i < times; i++) {
            output = output.concat(arrayFunction())
        }

        return output
    }

export default repeatCall
