import { Reducer, Action } from 'redux';

type Countdown = { title: string; timestamp: string };

export interface CountdownState {
    nextRun?: Countdown;
    seasonEnd?: Countdown;
}

export interface SetNextRunAction { type: "Set Next Run", countdown: Countdown }
export interface SetSeasonEndAction { type: "Set Season End", countdown: Countdown }

type KnownActions = SetNextRunAction | SetSeasonEndAction;

const DefaultState = (): CountdownState => ({
    nextRun: { title: "Pokemon Anniversary Something", timestamp: "2021-02-13T01:22:00Z" },
    seasonEnd: { title: "Season End", timestamp: "2021-02-10T00:00:00Z" }
});

const reducer: Reducer = (state: CountdownState, incomingAction: Action) => {
    state = state || DefaultState();
    const action = incomingAction as KnownActions;
    const nextRun = state.nextRun;
    const seasonEnd = state.seasonEnd;
    switch (action.type) {
        case 'Set Next Run':
            return { nextRun: action.countdown, seasonEnd };
        case 'Set Season End':
            return { nextRun, seasonEnd: action.countdown };
    }
    return state;
}

export default reducer;