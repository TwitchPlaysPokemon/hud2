import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './reducers/ConfigureStore';
import './index.scss';
import Overlay from './overlay';


ReactDOM.render(<Provider store={configureStore()}>
    <Overlay />
</Provider>, document.getElementById('root'));

declare const module: __WebpackModuleApi.Module;
if (module.hot) {
    module.hot.accept('./overlay', () => {
        const NewOverlay = require('./overlay').default;
        ReactDOM.render(
            <Provider store={configureStore()}>
                <NewOverlay />
            </Provider>, document.getElementById('root')
        );
    });
}