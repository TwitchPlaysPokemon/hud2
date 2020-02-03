import * as React from 'react';
import Triplet from '../../structural/Triplet';
import './Footer.scss';
import Pinball from '../Pinball';
import Sidegame from '../Sidegame';
import FooterCard from './FooterCard';
import NowPlaying from './NowPlaying';

export default class Footer extends React.Component {
    render() {
        return <div className="match-footer">
            <Triplet>
                <Sidegame />
                <Triplet>
                    <FooterCard title="Support TPP">
                    </FooterCard>
                    <NowPlaying />
                    <FooterCard title="Pokémon Pinball">
                    </FooterCard>
                </Triplet>
                <Pinball />
            </Triplet>
        </div>
    }
}