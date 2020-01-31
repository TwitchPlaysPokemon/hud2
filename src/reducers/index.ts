import { combineReducers } from 'redux';
import profile, { ProfileState } from './profile';

export interface ApplicationState {
    profile: ProfileState;
}

export default combineReducers({
    profile
});