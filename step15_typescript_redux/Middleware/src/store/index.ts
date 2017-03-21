// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

// Application State IAppState
interface IAppState {
    counterReducer,
    gitReducer
}

// reducers
import { counterReducer } from './reducer/counter';
import { gitReducer } from './reducer/git';

// epics
import { gitEpic } from './epic/git';

// Application Epics / Effects
const rootEpic = combineEpics(
    gitEpic.getUserData
);

// Application Reducers
const rootReducer = combineReducers<IAppState>({
    counterReducer,
    gitReducer
});


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);
