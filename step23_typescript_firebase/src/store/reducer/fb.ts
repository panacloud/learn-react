import { FbAction } from '../action/fb';

const INITIAL_STATE = {
    users: [],
};

interface IAction {
    type: string,
    payload?: any
}

export function fbReducer(state = INITIAL_STATE, action: IAction) {
    let newState = null;
    switch (action.type) {
        
        case FbAction.ADD:
            newState = [...state.users];
            newState.push(action.payload);
            return Object.assign({}, state, { users: newState });

        case FbAction.UPDATE:
            console.info('catch action from epic: update', action.payload)
            return Object.assign({}, state);

        case FbAction.DEL:
            console.info('catch action from epic: del', action.payload)
            return Object.assign({}, state);

        default:
            return state;
    }
}