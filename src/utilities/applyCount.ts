import { Count, from } from '../nominal'

const applyCount: <T>(value: T, count: Count) => T =
    <T>(value: T, count: Count): T =>
        // @ts-ignore
        value * from.Count(count) as T

export {
    applyCount,
}
