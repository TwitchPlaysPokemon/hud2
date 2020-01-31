import * as React from 'react';
import sidegameImage from '../../img/psweet.png';
import Screenshot from './Screenshot';

export default class Sidegame extends React.PureComponent {
    render() {
        return <Screenshot src={sidegameImage} width={240} height={160} />;
    }
}