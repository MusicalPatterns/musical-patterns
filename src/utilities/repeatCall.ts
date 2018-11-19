import { Count, from } from '@musical-patterns/utilities'

const repeatCall: <T>(arrayFunction: () => T[], count: Count) => T[] =
    <T>(arrayFunction: () => T[], count: Count): T[] => {
        let repeatedArrayFunction: T[] = []
        for (let i: number = 0; i < from.Count(count); i++) {
            repeatedArrayFunction = repeatedArrayFunction.concat(arrayFunction())
        }

        return repeatedArrayFunction
    }

export {
    repeatCall,
}
