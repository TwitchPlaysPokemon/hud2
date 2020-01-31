import * as React from 'react';
import './FitToWidth.scss';

type FitProps = {
    className?: string;
    stretch?: boolean
};
type FitState = {
    containerWidth: number;
    contentWidth: number;
    contentHeight: number;
};

export default class FitToWidth extends React.Component<FitProps, FitState> {
    private windowResizeListener: EventListener;
    private containerDiv: HTMLDivElement | null = null;
    private innerDiv: HTMLDivElement | null = null;

    constructor(props: FitProps) {
        super(props);
        this.state = { containerWidth: 1, contentWidth: 1, contentHeight: 1 };
        this.windowResizeListener = () => this.checkWidths();
    }
    componentDidMount() {
        setTimeout(() => this.checkWidths(), 10)
        window.addEventListener("resize", this.windowResizeListener);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.windowResizeListener);
    }
    componentDidUpdate() {
        this.checkWidths();
    }
    private checkWidths() {
        if (this.containerDiv && this.innerDiv) {
            const containerWidth = this.containerDiv.clientWidth;
            const contentWidth = this.innerDiv.clientWidth;
            const contentHeight = this.innerDiv.clientHeight;
            if (this.state.containerWidth !== containerWidth
                || this.state.contentWidth !== contentWidth
                || this.state.contentHeight !== contentHeight) {
                this.setState({
                    containerWidth: containerWidth,
                    contentWidth: contentWidth,
                    contentHeight: contentHeight
                });
            }
        }
        else {
            setTimeout(() => this.checkWidths(), 1);
        }
    }

    render() {
        let scaleFactor = this.state.containerWidth / (this.state.contentWidth || 1);
        if (!this.props.stretch) {
            scaleFactor = Math.min(1, scaleFactor);
        }
        return <div
            ref={me => this.containerDiv = me}
            className={`fit-to-width-container ${this.props.className}`}
            style={{ height: this.state.contentHeight }}
            data-width={this.state.containerWidth}
        >
            <div style={{ transform: `scaleX(${scaleFactor})` }} ref={me => this.innerDiv = me}>
                {this.props.children}
            </div>
        </div>;
    }
}
