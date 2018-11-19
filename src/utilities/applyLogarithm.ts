import { Base } from '@musical-patterns/utilities'

const applyLogarithm: <T>(value: T, base: Base) => T =
    <T>(value: T, base: Base): T =>
        // @ts-ignore
        Math.log(value) / Math.log(base)

export {
    applyLogarithm,
}
