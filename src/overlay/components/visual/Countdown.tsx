import * as React from 'react';
import RunEachFrame from '../mechanical/RunEachFrame';
import Duration from '../../utils/duration';
import './Countdown.scss';
import ZeroPad from '../../utils/zeropad';

type CountdownProps = {
    onTimeUp?: () => void;
    label: string;
    countingTo: Date;
};

export default class Countdown extends RunEachFrame<CountdownProps, { timeLeftSeconds?: number }> {
    constructor(props: CountdownProps, context: any) {
        super(props, context);
        this.state = {};
    }
    onEachFrame() {
        const timeLeft = Math.floor((this.props.countingTo.valueOf() - Date.now()) / 1000);
        if (timeLeft < 0 && (this.state.timeLeftSeconds || 0) < 0)
            return;
        if (timeLeft !== this.state.timeLeftSeconds || 0) {
            this.setState({ timeLeftSeconds: timeLeft });
            if (timeLeft < 0)
                this.props.onTimeUp && this.props.onTimeUp();
        }
    }
    render() {
        const complete = (this.state.timeLeftSeconds || 0) <= 0;
        const duration = Duration(Math.max(0, this.state.timeLeftSeconds || 0));
        return <div className={`countdown ${complete ? "complete" : ""}`}>
            <span className="label">{this.props.label}</span>
            in
            <span className="duration">
                {Object.keys(duration).map(d => <span key={d}>
                    <span>{ZeroPad(duration[d], 2)}</span>
                    {d}
                </span>)}
            </span>
        </div>;
    }
}