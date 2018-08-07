const repeat: <T>(array: T[], times: number) => T[] =
    <T>(array: T[], times: number): T[] => {
        let output: T[] = []
        for (let i: number = 0; i < times; i++) {
            output = output.concat(array)
        }

        return output
    }

export default repeat
