import * as React from "react";
import './Emblem.scss';

type EmblemProps = {
    firstEmblem: number;
    runCount?: number;
    selectedEmblem: number;
}

export default class Emblem extends React.Component<EmblemProps, {}> {
    shouldComponentUpdate(nextProps: EmblemProps): boolean {
        return this.props.firstEmblem !== nextProps.firstEmblem || this.props.runCount !== nextProps.runCount ||
            this.props.selectedEmblem !== nextProps.selectedEmblem;
    }
    render() {
        return <div className={"emblem"} data-first={this.props.firstEmblem}
                     data-selected={this.props.selectedEmblem} data-count={this.props.runCount || 1}>
            <span className={"first"}>{this.props.firstEmblem}</span>
            {this.props.runCount && this.props.runCount !== 1 && <span className={"count"}>{this.props.runCount}</span>}
        </div>
    }
}