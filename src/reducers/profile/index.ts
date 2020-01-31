import { Reducer, Action } from 'redux';

export interface ProfileState {
    mode: "match" | "gb";
}

export interface ChangeModeAction { type: "Change Mode", mode: ProfileState["mode"] }

type KnownActions = ChangeModeAction;

const DefaultState = (): ProfileState => ({ mode: "match" });

const reducer:Reducer = (state: ProfileState, incomingAction: Action) => {
    state = state || DefaultState();
    const action = incomingAction as KnownActions;
    //const mode = state.mode;

    switch (action.type) {
        case 'Change Mode':
            return { mode: action.mode };
    }
    return state;
}

export default reducer;