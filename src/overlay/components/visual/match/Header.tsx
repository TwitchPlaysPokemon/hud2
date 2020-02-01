import * as React from 'react';
import Triplet from '../../structural/Triplet';
import Logo from '../Logo';
import Clock from '../Clock';
import './Header.scss';
import NextGame from './NextGame';

export default class Header extends React.Component {
    render() {
        return <div className="match-header">
            <Triplet>
                <NextGame />
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