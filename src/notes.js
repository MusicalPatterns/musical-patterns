import {threePartsToEachMainDescentStep, threePartsToEachMainDescentStepContinuation, maximumPartsToEachMainDescentStep, maximumPartsToEachMainDescentStepContinuation} from './calculator'

const standardNote = harmonic => {
    return {
        duration: harmonic,
        pitch: harmonic,
        sustain: harmonic - 0.1,
        gain: 1,
    }
}

const rest = duration => {
    return {
        duration,
        pitch: 81,
        sustain: duration - 0.1,
        gain: 0,
    }
}

const notes = {
    mainDescent: [
        // 1 bar of 24
        standardNote(3),
        standardNote(5),
        standardNote(7),
        standardNote(9),

        // // 1 bar of 24
        standardNote(11),
        standardNote(13),

        // 3 bars of 24
        standardNote(15),
        standardNote(17),
        standardNote(19),
        standardNote(21),

        // // 2 bars of 24
        standardNote(23),
        standardNote(25),

        // 5 bars of 24
        standardNote(27),
        standardNote(29),
        standardNote(31),
        standardNote(33),

        // // 3 bars of 24
        standardNote(35),
        standardNote(37),

        // 7 bars of 24
        standardNote(39),
        standardNote(41),
        standardNote(43),
        standardNote(45),

        // // 4 bars of 24
        standardNote(47),
        standardNote(49),

        // 9 bars of 24
        standardNote(51),
        standardNote(53),
        standardNote(55),
        standardNote(57),
    ],
    backbone: [
        standardNote(3),
        standardNote(1),
    ],
    firstLayer: [
        // 2 bars of 24
        rest(15),
        standardNote(5),
        rest(7),
        standardNote(5),
        rest(3),
        standardNote(5),
        rest(3),
        standardNote(5),

        // 3 bars of 24
        standardNote(7),
        standardNote(5),
        rest(3),
        standardNote(5),
        standardNote(7),
        standardNote(5),
        standardNote(7),
        standardNote(5),
        standardNote(7),
        standardNote(5),
        standardNote(7),
        standardNote(9),

        // 2 bars of 24
        standardNote(7),
        standardNote(9),
        standardNote(7),
        standardNote(9),
        standardNote(7),
        standardNote(9),
    ],
    secondLayer: [
        // 1 bar of 24
        rest(19),
        standardNote(5),

        // 4 bars of 24
        rest(27),
        standardNote(5),
        standardNote(7),
        rest(36),
        standardNote(9),
        standardNote(7),
        standardNote(5),

        // 2 bars of 24
        rest(7),
        standardNote(5),
        rest(11),
        standardNote(5),
        rest(11),
        standardNote(5),
        rest(4),
    ],
    thirdLayer: [
        // 7 bars of 24
        rest(103),
        standardNote(5),
        rest(3),
        standardNote(5),
        rest(15),
        standardNote(5),
        rest(11),
        standardNote(5),
        rest(11),
        standardNote(5),
    ],
    mainDescentContinuation: [
        // 5 bars of 24
        standardNote(59),
        standardNote(61),

        // // 11 bars of 24
        standardNote(63),
        standardNote(65),
        standardNote(67),
        standardNote(69),

        // 6 bars of 24
        standardNote(71),
        standardNote(73),

        // // 13 bars of 24
        standardNote(75),
        standardNote(77),
        standardNote(79),
        standardNote(81),
    ],
    experimentPartTwo: [
        // 7 bars of 24
        standardNote(19),
        standardNote(21),
        standardNote(19),
        standardNote(21),
        standardNote(19),
        standardNote(21),
        rest(48),
    ],
    threePartsToEachMainDescentStep: threePartsToEachMainDescentStep.map(standardNote),
    threePartsToEachMainDescentStepContinuation: threePartsToEachMainDescentStepContinuation.map(standardNote),
    maximumPartsToEachMainDescentStep: maximumPartsToEachMainDescentStep.map(standardNote),
    maximumPartsToEachMainDescentStepContinuation: maximumPartsToEachMainDescentStepContinuation.map(standardNote),
}

export default notes
