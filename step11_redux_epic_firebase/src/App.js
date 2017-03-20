import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TodoAction } from './store/action/todo'

function mapStateToProps(state) {
    return {
        todos: state.TodoReducer.todos,
        loading: state.TodoReducer.loading,
        isError: state.TodoReducer.isError,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getTodos: () => dispatch(TodoAction.getTodos()),
        getTodosCancel: () => dispatch(TodoAction.getTodosCancel()),
        addTodo: (data) => dispatch(TodoAction.addTodo(data)),
        deleteTodo: (data) => dispatch(TodoAction.deleteTodo(data)),
        markTodoArchived: (data) => dispatch(TodoAction.markTodoArchived(data)),
    };
}
class Todo extends Component {
    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this);
        this.props.getTodos(); //start getting todo from firebase
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isError) alert("Error Message: " + nextProps.errorMessage);
    }

    addTodo(e) {
        e.preventDefault();
        this.props.addTodo({ todo: this.refs.todo.value, isDone: false });
        this.refs.todo.value = "";
    }

    toggleMarkArchived(key, isDone) {
        this.props.markTodoArchived({ key: key, isDone: !isDone });
    }

    deleteTodo(key) {
        this.props.deleteTodo({ key: key });
    }

    render() {
        let todoList = Object.keys(this.props.todos).map((key, index) => {
            let val = this.props.todos[key];
            return (
                <li key={index}>
                    <h3> {val.todo}</h3>
                    <p>
                        {(val.isDone) ? <button onClick={() => { this.deleteTodo(key) }}>Delete</button> : ""}
                        <button onClick={() => { this.toggleMarkArchived(key, val.isDone) }} >{val.isDone ? "Undo Archive" : "Mark Archive"}</button>
                    </p>
                </li>
            )
        })
        return (
            <div>
                <h2>Firebase Todo App using redux and redux-observable(epic)</h2>
                <ul>
                    {todoList}
                </ul>
                <form onSubmit={this.addTodo}>
                    <input type="text" placeholder="todo" ref="todo" /> <br />
                    <button type="submit">Add Todo</button>

                    <button onClick={this.props.getTodosCancel}>
                        Cancel getting todo
                </button>
                </form>
                {(this.props.loading) ? <p>Loading...</p> : ""}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)