import { combineReducers } from 'redux';
import profile, { ProfileState } from './profile';
import countdowns, { CountdownState } from './countdowns';
import music, { MusicState } from './music';
import viewers, { ViewersState } from "./viewers";

export interface ApplicationState {
    profile: ProfileState;
    countdowns: CountdownState;
    music: MusicState;
    viewers: ViewersState;
}

export default combineReducers({
    profile,
    countdowns,
    music,
    viewers,
});