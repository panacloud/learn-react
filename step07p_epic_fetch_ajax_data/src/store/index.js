import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

import userReducer from './reducers/userReducer';

import UserEpic from './epics/userEpic';

export const rootReducer = combineReducers({
    userReducer
// more reducers go here
})

export const rootEpic = combineEpics(
    UserEpic.getRepoData,
    UserEpic.getFollowersData
    // more epics functions go here
)

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);

let store = createStore(rootReducer,createStoreWithMiddleware)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
