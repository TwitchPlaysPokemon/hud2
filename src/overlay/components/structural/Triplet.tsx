import * as React from 'react';
import './Triplet.scss';

export default class Triplet extends React.Component<{ children: React.ReactNodeArray }> {
    render() {
        return <div className="triplet">
            {this.props.children.map((node, i) => <div key={i}>{node}</div>)}
        </div>;
    }
}