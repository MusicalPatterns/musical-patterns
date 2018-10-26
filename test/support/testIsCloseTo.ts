// tslint:disable:no-any

const testIsCloseTo: <T>(numberOne: T, numberTwo: T, negative?: boolean) => boolean =
    <T>(numberOne: T, numberTwo: T, negative?: boolean): boolean => {
        const numberOneAsNumber: number = numberOne as any
        const numberTwoAsNumber: number = numberTwo as any

        const precision: number = 2

        const pow: number = Math.pow(10, precision + 1)
        const delta: number = Math.abs(numberOneAsNumber - numberTwoAsNumber)
        const maxDelta: number = Math.pow(10, -precision) / 2

        const isClose: boolean = Math.round(delta * pow) / pow <= maxDelta

        if (!negative && !isClose) {
            fail(`expected ${numberOne} to be close to ${numberTwo}`)
        }
        else if (negative && isClose) {
            fail(`expected ${numberOne} not to be close to ${numberTwo}`)
        }

        return negative ? !isClose : isClose
    }

export {
    testIsCloseTo,
}
