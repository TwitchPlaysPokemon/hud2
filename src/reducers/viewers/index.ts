import { Reducer, Action } from 'redux';

export interface ViewersState {
    viewers: number;
    change: number;
}

export interface UpdateViewersAction {type: "Update Viewers",
    viewers: ViewersState["viewers"]}

type KnownActions = UpdateViewersAction;

const DefaultState = (): ViewersState => ({
    viewers: 0,
    change: 0
});

const reducer: Reducer = (state: ViewersState, incomingAction: Action) => {
    state = state || DefaultState();
    const action = incomingAction as KnownActions;

    switch (action.type)
    {
        case "Update Viewers":
            return { viewers: action.viewers, change: action.viewers - state.viewers };
    }
    return state;
};

export default reducer;