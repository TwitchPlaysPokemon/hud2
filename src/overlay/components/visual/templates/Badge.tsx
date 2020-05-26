import * as React from 'react';
import './Badge.scss'

export default class Badge extends React.Component<{id: string}, {}> {
    shouldComponentUpdate(nextprops: {id: string}): boolean {
        return nextprops.id !== this.props.id;
    }
    render() {
        return <div className={"pkmn-badge"}>
            <img src={`https://twitchplayspokemon.tv/static/pkmn-badges/${this.props.id}.png`} alt={this.props.id} />
        </div>
    }
}