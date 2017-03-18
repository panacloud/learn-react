import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { ajaxReducer } from './reducer/reducer-ajax';
import { ajaxEpic } from './epic/epic-ajax';

//combine epics
const rootEpic = combineEpics(
    ajaxEpic.getRepos,
);
//combine reducers
const rootReducer = combineReducers({
    ajaxReducer //provide all reducers here comma seaprated
})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);
//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//creating store with middleware
const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //this line will enable redux dev tool
)
export default store;