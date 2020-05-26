import * as React from 'react';
import Header from './Header';
import './MatchMode.scss';
import Footer from './Footer';
import User from "../templates/User";

export default class MatchMode extends React.Component {
    render() {
        return <div className="match-mode">
            <Header />
            <User userName={"Reddo"} pokeBadge={"395"} firstEmblem={1} runCount={43} selectedEmblem={11} />
            <Footer />
        </div>
    }
}