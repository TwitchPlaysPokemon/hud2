import * as React from 'react';
import './FooterCard.scss';

export default class FooterCard extends React.Component<{ title?: string; callToAction?: string; className?: string; }> {
    render() {
        return <div className={`footer-card`}>
            <div className={this.props.className}>
                {this.props.children}
            </div>
            <hr />
            {this.props.title && <div className="title">{this.props.title}</div>}
            {this.props.callToAction && <div className="call-to-action">{this.props.callToAction}</div>}
        </div>
    }
}