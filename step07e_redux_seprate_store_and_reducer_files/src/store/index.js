import { createStore } from 'redux'

// update in counter 5 -- importing counter reducer from separate reducer folder
import counter from './reducers/counter';

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
