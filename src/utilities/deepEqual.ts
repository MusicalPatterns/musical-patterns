// tslint:disable:no-any no-unsafe-any

const deepEqual: (_: any, __: any) => boolean =
    (a: any, b: any): boolean => {
        if (a === b) {
            return true
        }
        else if (a instanceof Array) {
            if (b instanceof Array) {
                return a.every((el: any, index: number): boolean => deepEqual(el, b[index]))
            }
            else {
                return false
            }
        }
        else if (typeof a === 'object') {
            if (b instanceof Array) {
                return false
            }
            else if (typeof b === 'object') {
                return Object.entries(a).every(([key, value]: [string, any]): boolean =>
                    deepEqual(value, b[key]))
            }
            else {
                return false
            }
        }

        return false
    }

export {
    deepEqual,
}
