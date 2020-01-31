import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from '.'

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    if (module.hot)
        module.hot.accept('.', () => store.replaceReducer(rootReducer));
    return store;
}

export default configureStore;