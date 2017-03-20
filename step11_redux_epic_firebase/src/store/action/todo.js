export class TodoAction {

    static GET_TODO = 'GET_TODO';
    static GET_TODO_ADDED = 'GET_TODO_ADDED';
    static GET_TODO_REMOVED = 'GET_TODO_REMOVED';
    static GET_TODO_CHANGED = 'GET_TODO_CHANGED';
    static GET_TODO_CANCELLED = 'GET_TODO_CANCELLED';

    static ADD_TODO = 'ADD_TODO';
    static MARK_TODO_ARCHIVED = 'MARK_TODO_ARCHIVED';
    static DELETE_TODO = 'DELETE_TODO';

    static NULL = 'NULL';

    static getTodos() {
        return { type: TodoAction.GET_TODO }
    }
    static getTodosCancel(data) {
        return { type: TodoAction.GET_TODO_CANCELLED, }
    }
    static addTodo(data) {
        return { type: TodoAction.ADD_TODO, payload: data }
    }
    static markTodoArchived(data) {
        return { type: TodoAction.MARK_TODO_ARCHIVED, payload: data }
    }
    static deleteTodo(data) {
        return { type: TodoAction.DELETE_TODO, payload: data }
    }
}