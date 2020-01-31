import * as React from 'react';
import FooterCard from './FooterCard';
import musicIcon from '../../../img/toons.png';
import FitToWidth from '../../mechanical/FitToWidth';
import './NowPlaying.css';

type Song = {
    title: string;
    game?: string;
    year?: string;
    system?: string;
}
type NowPlayingProps = {
    current: Song;
    next?: Song;
    highestBid?: number;
}

export default class NowPlaying extends React.Component<NowPlayingProps> {
    render() {
        return <FooterCard className="now-playing" callToAction="Fancy something else? Bid on tracks with tokens!">
            <img src={musicIcon} alt=""/>
            <div>
                <FitToWidth className="track-name">
                    {this.props.current.title}
                </FitToWidth>
                <FitToWidth className="track-info">
                    {`${this.props.current.game}, ${this.props.current.year} - ${this.props.current.system}`}
                </FitToWidth>
                <FitToWidth className="next-track">
                    {this.props.next ?
                        `UP NEXT: ${this.props.next.title}` :
                        "UP NEXT: Random Song"}
                    {this.props.highestBid && ` (T${this.props.highestBid})`}
                </FitToWidth>
            </div>
        </FooterCard>;
    }
}