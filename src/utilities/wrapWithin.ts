const wrapWithin: (n: number, within: number) => number =
    (n: number, within: number): number => {
        let newN: number = n

        while (newN < 0) {
            newN += within
        }
        while (newN >= within) {
            newN -= within
        }

        return newN
    }

export default wrapWithin
