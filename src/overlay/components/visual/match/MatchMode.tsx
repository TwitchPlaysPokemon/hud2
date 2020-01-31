import * as React from 'react';
import Header from './Header';
import './MatchMode.css';
import Footer from './Footer';

export default class MatchMode extends React.Component {
    render() {
        return <div className="match-mode">
            <Header />
            <Footer />
        </div>
    }
}