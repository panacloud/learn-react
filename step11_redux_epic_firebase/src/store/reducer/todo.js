import { TodoAction } from "./../action/todo";

const INITIAL_STATE = {
    todos: {},
    loading: false,
}

export function TodoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case TodoAction.GET_TODO:
            return { ...state, loading: true};

        case TodoAction.GET_TODO_ADDED:
            var newTodos = Object.assign({}, state.todos);
            newTodos[action.payload.key] = action.payload.val;
            return { ...state, todos: newTodos, loading: false };

        case TodoAction.GET_TODO_REMOVED:
            var newTodos = Object.assign({}, state.todos);
            delete newTodos[action.payload];
            return { ...state, todos: newTodos, loading: false};

        case TodoAction.GET_TODO_CHANGED:
            var newTodos = Object.assign({}, state.todos);
            newTodos[action.payload.key] = action.payload.val;
            return { ...state, todos: newTodos, loading: false };
       
        default:
            return state;
    }
}