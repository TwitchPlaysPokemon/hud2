import * as React from 'react';
import './Odometer.scss'

type OdometerProps = {
    pad?: number;
    padChar?: string;
    num: number;
}

export default class Odometer extends React.PureComponent<OdometerProps, {oldNum: number, num: number}> {
    constructor(props: OdometerProps, context: any) {
        super(props,context);
        this.state = {oldNum: 0, num: props.num || 0};
    }
    static getDerivedStateFromProps(newProps: OdometerProps, oldState: any) {
        if (newProps.num === oldState.num)
            return oldState;
        return { oldNum: oldState.num, num: newProps.num};
    }
    render() {
        const num = this.state.num;
        const backwards = num < this.state.oldNum;
        const digits = num.toFixed(0).split('');
        while (this.props.pad && digits.length < this.props.pad)
            digits.unshift(this.props.padChar || ' ');
        return (<span className="odometer">
            {digits.map((d: string, i: number, arr: string[])=><Digit className={backwards && "backwards"} num={d} key={arr.length - i} />)}
        </span>);
    }
}

type DigitProps = {
    num?: string;
    className?: string | boolean;
}

class Digit extends React.Component<DigitProps, {oldNum: string, num: string}> {
    constructor(props: DigitProps, context: any) {
        super(props,context);
        this.state = {oldNum: " ", num: (props.num || " ")[0]};
    }
    shouldComponentUpdate(nextProps: DigitProps) {
        return this.props.num !== nextProps.num;
    }
    static getDerivedStateFromProps(newProps: DigitProps, oldState: any) {
        if (newProps.num === oldState.num)
            return oldState;
        return { oldNum: oldState.num, num: (newProps.num || " ")[0]};
    }
    render() {
        return <span
            key={this.state.num}
            className={`digit ${this.props.className}`}
            data-old={this.state.oldNum}
            data-new={this.state.num}
        />;
    }
}