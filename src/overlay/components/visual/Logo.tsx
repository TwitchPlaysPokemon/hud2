import * as React from 'react';
import './Logo.scss';
import logoImage from '../../img/TPP Logo.png';

export default class Logo extends React.PureComponent {
    render() {
        return <div className="logo">
            <img src={logoImage} alt="Twitch Plays Pokemon"/>
            <span>Twitch Plays Pokémon</span>
        </div>;
    }
}