import * as React from 'react';
import Img from 'react-image';

export default class ItemSprite extends React.Component<{ id: number }> {
    render() {
        return <Img src={`./sprites/item/item_${this.props.id}.png`} decode={false} />;
    }
}