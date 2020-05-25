import * as React from 'react';
import './User.scss'

type UserProps = {
    firstEmblem?: number;
    runCount?: number;
    selectedEmblem?: number;
    pokeBadge?: string;
    userNameColour?: string;
    glowColour?: string;
    userName: string;
    twitchBadges?: string[];
    userBadges?: string[];
}

export default class User extends React.Component<UserProps, {}> {
    shouldComponentUpdate(nextProps: UserProps): boolean {
        return this.props.pokeBadge !== nextProps.pokeBadge && this.props.selectedEmblem !== nextProps.selectedEmblem;
    }
    render() {
        return <div className={"user"} id={this.props.userName}>
            <div className={"pkmn-badge"}>{this.props.pokeBadge && <Badge id={this.props.pokeBadge} />}</div>
            <div className={"name"}>{this.props.userName}</div></div>
    }
}

export class Badge extends React.Component<{id: string}, {}> {
    shouldComponentUpdate(nextprops: {id: string}): boolean {
        return nextprops.id !== this.props.id;
    }
    render() {
        return <img src={`https://twitchplayspokemon.tv/static/pkmn-badges/${this.props.id}.png`}
                    alt={this.props.id} />
    }
}