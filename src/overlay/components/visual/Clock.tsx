import * as React from 'react';
import RunEachFrame from '../mechanical/RunEachFrame';
import './Clock.scss';

export default class Clock extends RunEachFrame<{}, { time: Date }> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = { time: new Date() };
    }
    onEachFrame() {
        this.setState({ time: new Date() });
    }
    render() {
        const datetime = this.state.time.toISOString().split('T');
        const date = datetime.shift() || '';
        const time = (datetime.pop() || '').replace('Z', ' UTC');
        return <div className="clock">
            <span className="date">{date}</span>
            <span className="time">{time}</span>
        </div>;
    }
}