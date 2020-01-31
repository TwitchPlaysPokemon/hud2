import { Reducer, Action } from 'redux';
import Song from './song';

export interface MusicState {
    current: Song;
    next?: Song;
    highestBid?: number;
}
export interface SetNowPlayingAction { type: "Set Now Playing", song: Song }
export interface SetNextSongAction { type: "Set Next Song", song: Song, bid: number }

type KnownActions = SetNowPlayingAction | SetNextSongAction;

const DefaultState = (): MusicState => ({
    current: {
        title: "Katamari on the Rocks",
        game: "Katamari Damacy",
        system: "PS2",
        year: "2003"
    },
    next: {
        title: "Castle (Super Mario World) - Mix",
        game: "Super Mario Maker",
        year: "2015",
        system: "Wii U, 3DS"
    },
    highestBid: 14
});

const reducer: Reducer = (state: MusicState, incomingAction: Action) => {
    state = state || DefaultState();
    const action = incomingAction as KnownActions;
    const current = state.current;
    const next = state.next;
    const highestBid = state.highestBid;

    switch (action.type) {
        case "Set Now Playing":
            return { current: action.song, next, highestBid };
        case "Set Next Song":
            return { current, next: action.song, highestBid: action.bid };
    }
    return state;
}

export default reducer;