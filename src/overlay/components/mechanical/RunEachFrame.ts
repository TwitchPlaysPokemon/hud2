import * as React from 'react';

export default abstract class RunEachFrame<P = {}, S = {}> extends React.Component<P, S> {
    abstract onEachFrame(): void;
    private run = false;
    private tick() {
        if (!this.run)
            return;
        this.onEachFrame();
        requestAnimationFrame(() => this.tick());
    }
    componentWillMount() {
        this.run = true;
        this.tick();
    }
    componentWillUnmount() {
        this.run = false;
    }
    abstract render(): JSX.Element;
}