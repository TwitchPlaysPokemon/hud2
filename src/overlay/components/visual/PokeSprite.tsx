import * as React from 'react';
import Img from 'react-image';

type PokeSpriteProps = {
    dexNum: number;
    gender?: "Male" | "Female" | null;
    form?: number;
    shiny?: boolean;
};

export default class PokeSprite extends React.Component<PokeSpriteProps> {
    render() {
        const shiny = this.props.shiny;
        const gender = this.props.gender;
        const form = this.props.form;
        const id = this.props.dexNum;
        const possibleSprites = [
            id && gender && `./sprites/pokemon/${shiny ? "shiny" : ""}/${gender == "Female" ? "female/" : ""}${id}${form ? `-${form}` : ''}.png`,
            id && form && `./sprites/pokemon/${shiny ? "shiny" : ""}/${id}-${form}.png`,
            id && shiny && `./sprites/pokemon/shiny/${id}.png`,
            id && `./sprites/pokemon/${id}.png`,
            `./sprites/pokemon/0.png`
        ].filter(p => !!p) as string[];
        return <Img src={possibleSprites} decode={false} />;
    }
}