import * as React from 'react';
import pinballImg from '../../img/pinbl.gif';
import Screenshot from './Screenshot';

export default class Pinball extends React.PureComponent {
    render() {
        return <Screenshot src={pinballImg} width={160} height={144} />;
    }
}