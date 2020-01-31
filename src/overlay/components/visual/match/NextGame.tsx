import * as React from 'react';
import { CountdownState } from '../../../../reducers/countdowns';
import Countdown from '../Countdown';
import { ApplicationState } from '../../../../reducers';
import { connect } from 'react-redux';

class NextGame extends React.Component<CountdownState> {
    render() {
        return <div className="next-game">
            {this.props.nextRun && <div className="label">Next Game:</div>}
            {this.props.nextRun && <Countdown label={this.props.nextRun.title} countingTo={new Date(this.props.nextRun.timestamp)} />}
        </div >;
    }
}

export default connect((state: ApplicationState) => state.countdowns)(NextGame);