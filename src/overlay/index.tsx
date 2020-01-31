import *  as React from 'react';
import MatchMode from './components/visual/match/MatchMode';
import { connect } from 'react-redux';
import { ApplicationState } from '../reducers';
import { ProfileState } from '../reducers/profile';

class Overlay extends React.Component<ProfileState> {
    render() {
        switch (this.props.mode) {
            case 'match':
                return <MatchMode />;
            case 'gb':
                return <h1>Make GB Mode</h1>;
        }
    }
}

export default connect((state: ApplicationState) => state.profile)(Overlay);