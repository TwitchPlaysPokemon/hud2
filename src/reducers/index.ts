import { combineReducers } from 'redux';
import profile, { ProfileState } from './profile';
import countdowns, { CountdownState } from './countdowns';
import music, { MusicState } from './music';

export interface ApplicationState {
    profile: ProfileState;
    countdowns: CountdownState;
    music: MusicState;
}

export default combineReducers({
    profile,
    countdowns,
    music,
});