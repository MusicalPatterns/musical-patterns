import { SongSpec } from '../../songs'
import { to } from '../nominal'
import { StringifiedSongSpec, StringifiedSongSpecEntry } from '../state'

const songSpecDefaults: SongSpec = {
    songDurationScalar: to.Scalar(1),
    songPitchScalar: to.Scalar(1),
}

const destringifySongSpec: (displayedSongSpec: StringifiedSongSpec) => SongSpec =
    (displayedSongSpec: StringifiedSongSpec): SongSpec =>
        Object
            .entries(displayedSongSpec)
            .reduce(
                (destringifiedSongSpec: SongSpec, [ key, val ]: StringifiedSongSpecEntry): SongSpec =>
                    ({ ...destringifiedSongSpec, [key]: JSON.parse(val) }),
                songSpecDefaults,
            )

export {
    destringifySongSpec,
}
