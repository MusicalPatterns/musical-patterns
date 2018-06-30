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

		// 1 bar of 24
		standardNote(11),
		standardNote(13),

		// 3 bars of 24
		standardNote(15),
		standardNote(17),
		standardNote(19),
		standardNote(21),

		// 2 bars of 24
		standardNote(23),
		standardNote(25),
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
	continuationOfMainDescent: [
		// 7 bars of 24
		standardNote(59),
		standardNote(61),
		{
			duration: 63 - 15,
			pitch: 63,
			sustain: 63 - 0.1,
			gain: 1,
		},
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
}

export default notes
