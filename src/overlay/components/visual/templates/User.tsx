import * as React from 'react';
import './User.scss'
import Badge from "./Badge";
import Emblem from "./Emblem";

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
        return this.props.pokeBadge !== nextProps.pokeBadge || this.props.selectedEmblem !== nextProps.selectedEmblem;
    }
    render() {
        return <div className={"user"} id={this.props.userName}>
            {this.props.firstEmblem &&
            <Emblem firstEmblem={this.props.firstEmblem} selectedEmblem={this.props.selectedEmblem || this.props.firstEmblem}
                    runCount={this.props.runCount} />}
            {this.props.pokeBadge && <Badge id={this.props.pokeBadge} />}
            <div className={"name"}>{this.props.userName}</div></div>
    }
}