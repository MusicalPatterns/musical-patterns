import { Count, from } from '@musical-patterns/utilities'

const applyCount: <T>(value: T, count: Count) => T =
    <T>(value: T, count: Count): T =>
        // @ts-ignore
        value * from.Count(count) as T

export {
    applyCount,
}
