import * as from from './from'
import { Count } from './nominalTypes'

const repeatCall: <T>(arrayFunction: () => T[], count: Count) => T[] =
    <T>(arrayFunction: () => T[], count: Count): T[] => {
        let output: T[] = []
        for (let i: number = 0; i < from.Count(count); i++) {
            output = output.concat(arrayFunction())
        }

        return output
    }

export default repeatCall
