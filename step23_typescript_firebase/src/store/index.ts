// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

// Application State IAppState
interface IAppState {
    counterReducer,
    gitReducer,
    fbReducer
}

// reducers
import { counterReducer } from './reducer/counter';
import { gitReducer } from './reducer/git';
import { fbReducer } from './reducer/fb';

// epics
import { gitEpic } from './epic/git';
import { fbEpic } from './epic/fb';

// Application Epics / Effects
const rootEpic = combineEpics(
    gitEpic.getUserData,
    fbEpic.getUserData
);

// Application Reducers
const rootReducer = combineReducers<IAppState>({
    counterReducer,
    gitReducer,
    fbReducer
});


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);
