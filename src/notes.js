const notes = [
    [
        // 7
        {duration: 1, pitch: 13, sustain: .5, gain: .4},
        {duration: 1, pitch: 13, sustain: .5, gain: .2},
        {duration: 1, pitch: 13, sustain: .5, gain: .2},
        {duration: 1, pitch: 13, sustain: .5, gain: .2},
        {duration: 1, pitch: 13, sustain: .5, gain: .2},
        {duration: 1, pitch: 13, sustain: .5, gain: .2},
        {duration: 1, pitch: 13, sustain: .5, gain: .2},

        // 8
        {duration: 1, pitch: 15, sustain: .5, gain: .3},
        {duration: 1, pitch: 15, sustain: .5, gain: .15},
        {duration: 1, pitch: 15, sustain: .5, gain: .15},
        {duration: 1, pitch: 15, sustain: .5, gain: .15},
        {duration: 1, pitch: 15, sustain: .5, gain: .15},
        {duration: 1, pitch: 15, sustain: .5, gain: .15},
        {duration: 1, pitch: 15, sustain: .5, gain: .15},
        {duration: 1, pitch: 15, sustain: .5, gain: .15},

        // 9
        {duration: 1, pitch: 17, sustain: .5, gain: .25},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},
        {duration: 1, pitch: 17, sustain: .5, gain: .125},

        // 10
        {duration: 1, pitch: 19, sustain: .5, gain: .2},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},
        {duration: 1, pitch: 19, sustain: .5, gain: .1},

        // 11
        {duration: 1, pitch: 21, sustain: .5, gain: .15},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
        {duration: 1, pitch: 21, sustain: .5, gain: .075},
    ],
    [
        // 4
        {duration: 1, pitch: 7, sustain: .5, gain: 1},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},

        // 3
        {duration: 1, pitch: 5, sustain: .5, gain: 1},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},

        // 2
        {duration: 1, pitch: 3, sustain: .5, gain: 1},
        {duration: 1, pitch: 3, sustain: .5, gain: .5},

        // 1
        {duration: 1, pitch: 1, sustain: .5, gain: 3},

        // 2
        {duration: 1, pitch: 3, sustain: .5, gain: 1},
        {duration: 1, pitch: 3, sustain: .5, gain: .5},

        // 3
        {duration: 1, pitch: 5, sustain: .5, gain: 1},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},


        // 4
        {duration: 1, pitch: 7, sustain: .5, gain: 1},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},

        // 3
        {duration: 1, pitch: 5, sustain: .5, gain: 1},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},

        // 2
        {duration: 1, pitch: 3, sustain: .5, gain: 1},
        {duration: 1, pitch: 3, sustain: .5, gain: .5},

        // 1
        {duration: 1, pitch: 1, sustain: .5, gain: 3},

        // 2
        {duration: 1, pitch: 3, sustain: .5, gain: 1},
        {duration: 1, pitch: 3, sustain: .5, gain: .5},

        // 3
        {duration: 1, pitch: 5, sustain: .5, gain: 1},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},


        // 4
        {duration: 1, pitch: 7, sustain: .5, gain: 1},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},
        {duration: 1, pitch: 7, sustain: .5, gain: .5},

        // 5
        {duration: 1, pitch: 9, sustain: .5, gain: .75},
        {duration: 1, pitch: 9, sustain: .5, gain: .375},
        {duration: 1, pitch: 9, sustain: .5, gain: .375},
        {duration: 1, pitch: 9, sustain: .5, gain: .375},
        {duration: 1, pitch: 9, sustain: .5, gain: .375},

        // 6
        {duration: 1, pitch: 11, sustain: .5, gain: .5},
        {duration: 1, pitch: 11, sustain: .5, gain: .25},
        {duration: 1, pitch: 11, sustain: .5, gain: .25},
        {duration: 1, pitch: 11, sustain: .5, gain: .25},
        {duration: 1, pitch: 11, sustain: .5, gain: .25},
        {duration: 1, pitch: 11, sustain: .5, gain: .25},
    ],
    [
        // 12
        {duration: 1, pitch: 23, sustain: .5, gain: .1},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},
        {duration: 1, pitch: 23, sustain: .5, gain: .05},

        // 13
        {duration: 1, pitch: 25, sustain: .5, gain: .08},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},
        {duration: 1, pitch: 25, sustain: .5, gain: .04},

        // 14
        {duration: 1, pitch: 27, sustain: .5, gain: .06},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},
        {duration: 1, pitch: 27, sustain: .5, gain: .03},

        // 1
        {duration: 1, pitch: 1, sustain: .5, gain: 3},

        // 2
        {duration: 1, pitch: 3, sustain: .5, gain: 1},
        {duration: 1, pitch: 3, sustain: .5, gain: .5},

        // 3
        {duration: 1, pitch: 5, sustain: .5, gain: 1},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},
        {duration: 1, pitch: 5, sustain: .5, gain: .5},
    ],
    [
        {duration: 1, pitch: 1, sustain: .5, gain: 5},
        {duration: 2, pitch: 3, sustain: .5, gain: 3},

        {duration: 1, pitch: 1, sustain: .5, gain: 5},
        {duration: 1, pitch: 3, sustain: .5, gain: 3},
        {duration: 2, pitch: 5, sustain: .5, gain: 3},

        {duration: 1, pitch: 1, sustain: .5, gain: 5},
        {duration: 2, pitch: 3, sustain: .5, gain: 3},

        {duration: 1, pitch: 1, sustain: .5, gain: 5},
        {duration: 1, pitch: 3, sustain: .5, gain: 3},
        {duration: 1, pitch: 5, sustain: .5, gain: 3},
        {duration: 2, pitch: 7, sustain: .5, gain: 3},
    ],
    // [
    //     {duration: 1, pitch: 1, sustain: .5, gain: 5},
    //     {duration: 2, pitch: 3, sustain: .5, gain: 3},
    // ],
    [
        // 24
        {duration: 3, pitch: 3, sustain: 3 -.1, gain: Math.pow(1.1 ,0)},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: Math.pow(1.1 ,1)},
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: Math.pow(1.1 ,2)},
        {duration: 9, pitch: 9, sustain: 9 -.1, gain: Math.pow(1.1 ,3)},

        // 24
        {duration: 11, pitch: 11, sustain: 11 -.1, gain: Math.pow(1.1 ,4)},
        {duration: 13, pitch: 13, sustain: 13 -.1, gain: Math.pow(1.1 ,5)},

        // 72
        {duration: 15, pitch: 15, sustain: 15 -.1, gain: Math.pow(1.1 ,6)},
        {duration: 17, pitch: 17, sustain: 17 -.1, gain: Math.pow(1.1 ,7)},
        {duration: 19, pitch: 19, sustain: 19 -.1, gain: Math.pow(1.1 ,8)},
        {duration: 21, pitch: 21, sustain: 21 -.1, gain: Math.pow(1.1 ,9)},

        // 48
        {duration: 23, pitch: 23, sustain: 23 -.1, gain: Math.pow(1.1 ,10)},
        {duration: 25, pitch: 25, sustain: 25 -.1, gain: Math.pow(1.1 ,11)},
    ],
    [
        {duration: 3, pitch: 3, sustain: 3 -.1, gain: 1},
        {duration: 1, pitch: 1, sustain: 1 -.1, gain: 1},
    ],
    [
        // 48
        {duration: 15, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 7, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 3, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 3, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },

        // 72
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 3, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 9, pitch: 9, sustain: 9 -.1, gain: 1 },

        // 48
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 9, pitch: 9, sustain: 9 -.1, gain: 1 },
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 9, pitch: 9, sustain: 9 -.1, gain: 1 },
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 9, pitch: 9, sustain: 9 -.1, gain: 1 },
    ],
    [
        // 24
        {duration: 19, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },

        // 32
        {duration: 27, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },

        // 64
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 36, pitch: 49, sustain: .1, gain: 0},
        {duration: 9, pitch: 9, sustain: 9 -.1, gain: 1 },
        {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },

        // 48
        {duration: 7, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 11, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 11, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 4, pitch: 49, sustain: .1, gain: 0},
    ],
    [
        // 116
        // {duration: 7, pitch: 7, sustain: 7 -.1, gain: 1 },
        // {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        // {duration: 91, pitch: 49, sustain: .1, gain: 0},
        {duration: 103, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 3, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },

        // 36
        {duration: 15, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
        {duration: 11, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },

        // 16
        {duration: 11, pitch: 49, sustain: .1, gain: 0},
        {duration: 5, pitch: 5, sustain: 5 -.1, gain: 1 },
    ],
]

export default notes
