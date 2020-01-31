import * as React from 'react';
import Triplet from '../../structural/Triplet';
import './Footer.css';
import Pinball from '../Pinball';
import Sidegame from '../Sidegame';
import FooterCard from './FooterCard';
import NowPlaying from './NowPlaying';

export default class Footer extends React.Component {
    render() {
        return <div className="match-footer">
            <Triplet>
                <Pinball />
                <Triplet>
                    <FooterCard title="Pokémon Pinball">
                    </FooterCard>
                    <NowPlaying />
                    <FooterCard title="Support TPP">
                    </FooterCard>
                </Triplet>
                <Sidegame />
            </Triplet>
        </div>
    }
}