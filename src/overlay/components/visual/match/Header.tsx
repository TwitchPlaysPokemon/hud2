import * as React from 'react';
import Triplet from '../../structural/Triplet';
import Logo from '..//Logo';
import Countdown from '../Countdown';
import Clock from '../Clock';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return <div className="match-header">
            <Triplet>
                <div className="next-game">
                    <div className="label">Next Game:</div>
                    <Countdown label="Pokemon Dual Gold Silver" countingTo={new Date("2020-02-13T01:22:00Z")}/>
                </div>
                <Logo />
                <div className="view-stats">
                    <Clock />
                    <div>
                        <span>9999 viewers</span>
                    </div>
                </div>
            </Triplet>
        </div>
    }
}