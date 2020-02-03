import * as React from 'react';
import './ViewStats.scss';
import viewersUp from '../../img/Header/ViewersUp.svg';
import viewersDown from '../../img/Header/ViewersDown.svg';
import viewCount from '../../img/Header/ViewCount.svg';
import {ViewersState} from "../../../reducers/viewers";
import { connect } from "react-redux";
import { ApplicationState } from "../../../reducers";

class ViewStats extends React.Component<ViewersState> {
    render() {
        return <div className="viewers">
            <span className="viewer-count">
                <img src={viewCount} alt="View Count"/>
                <span>{this.props.viewers}</span>
            </span>
            <span className="viewer-change">
                <img className="change" src={(this.props.change >= 0 ? viewersUp : viewersDown)} alt="Viewer Change"/>
                <span>{this.props.change}</span>
            </span>
        </div>
    }
}

export default connect((state: ApplicationState) => state.viewers)(ViewStats);