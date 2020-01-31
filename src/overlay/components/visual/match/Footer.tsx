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
                    <NowPlaying current={{
                        title: "Katamari on the Rocks",
                        game: "Katamari Damacy",
                        system: "PS2",
                        year: "2003"
                    }}
                        next={{
                            title: "Castle (Super Mario World) - Mix",
                            game: "Super Mario Maker",
                            year: "2015",
                            system: "Wii U, 3DS"
                        }}
                        highestBid={14}
                    />
                    <FooterCard title="Support TPP">
                    </FooterCard>
                </Triplet>
                <Sidegame />
            </Triplet>
        </div>
    }
}