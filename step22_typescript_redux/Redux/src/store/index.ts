// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

// Application State IAppState
interface IAppState {
    counterReducer
}

// reducers
import { counterReducer } from './reducer/counter';

// Application Reducers
const rootReducer = combineReducers<IAppState>({
    counterReducer
});

export let store = createStore(rootReducer);
