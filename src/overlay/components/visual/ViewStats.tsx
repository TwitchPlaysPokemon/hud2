import * as React from 'react';
import './ViewStats.scss';
import {ViewersState} from "../../../reducers/viewers";
import { connect } from "react-redux";
import { ApplicationState } from "../../../reducers";

class ViewStats extends React.Component<ViewersState> {
    render() {
        let _class = "viewer-change " + (this.props.change < 0 ? "arrow-down" : "");
        return <div className="viewers">
            <span className="viewer-count">
                {this.props.viewers}
            </span>
            <span className={_class}>
                {Math.abs(this.props.change)}
            </span>
        </div>
    }
}

export default connect((state: ApplicationState) => state.viewers)(ViewStats);