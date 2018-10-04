const testIsCloseTo: (numberOne: number, numberTwo: number, negative?: boolean) => boolean =
    (numberOne: number, numberTwo: number, negative?: boolean): boolean => {
        const precision: number = 2

        const pow: number = Math.pow(10, precision + 1)
        const delta: number = Math.abs(numberOne - numberTwo)
        const maxDelta: number = Math.pow(10, -precision) / 2

        const isClose: boolean = Math.round(delta * pow) / pow <= maxDelta

        if (!negative && !isClose) {
            fail(`expected ${numberOne} to be close to ${numberTwo}`)
        } else if (negative && isClose) {
            fail(`expected ${numberOne} not to be close to ${numberTwo}`)
        }

        return negative ? !isClose : isClose
    }

export default testIsCloseTo
