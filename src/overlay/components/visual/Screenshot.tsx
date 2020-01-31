import * as React from 'react';

const baseFontSizePx = 16;

export default class Screenshot extends React.Component<{ className?: string; src: string, width: number, height: number }> {
    render() {
        const sizing: React.CSSProperties = { width: `${this.props.width / baseFontSizePx}em`, height: `${this.props.height / baseFontSizePx}em` };
        return <div className={`screenshot ${this.props.className || ''}`} style={sizing}>
            <img src={this.props.src} style={sizing} alt="" />
        </div>
    }
}