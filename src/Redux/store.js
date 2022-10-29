import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const initialState = {};
const persistConfig = {
    key: 'root',
    storage,
}
const middleware = [thunk];


const persistedReducer = persistReducer(persistConfig, combineReducer)
const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
const persistor = persistStore(store)
export { store, persistor }
