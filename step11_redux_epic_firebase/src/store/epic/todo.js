import { Observable } from "rxjs";
import { TodoAction } from "./../action/todo";
import * as firebase from 'firebase';

const ref = firebase.database().ref('todoApp/todo');

export class TodoEpic {

    static addTodo = (action$) =>
        action$.ofType(TodoAction.ADD_TODO)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(ref.push(payload))
                    .map((x) => {
                        return { type: TodoAction.NULL };
                    })  
            })

    static markArchived = (action$) =>
        action$.ofType(TodoAction.MARK_TODO_ARCHIVED)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(ref.child(payload.key + "/isDone").set(payload.isDone))
                    .map((x) => {
                        return { type: TodoAction.NULL };
                    })
            })

    static deleteTodo = (action$) =>
        action$.ofType(TodoAction.DELETE_TODO)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(ref.child(payload.key).set(null))
                    .map((x) => {
                        return { type: TodoAction.NULL };
                    })
            })

    static getTodos = (action$) =>
        action$.ofType(TodoAction.GET_TODO)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {

                    ref.on("child_added", (snapshot) => {
                        observer.next({
                            type: TodoAction.GET_TODO_ADDED,
                            payload: {
                                key: snapshot.key,
                                val: snapshot.val()
                            }
                        })
                    })
                    ref.on("child_changed", (snapshot) => {
                        observer.next({
                            type: TodoAction.GET_TODO_CHANGED,
                            payload: {
                                key: snapshot.key,
                                val: snapshot.val()
                            }
                        })
                    })
                    ref.on("child_removed", (snapshot) => {
                        observer.next({
                            type: TodoAction.GET_TODO_REMOVED,
                            payload: snapshot.key
                        })
                    })
                }).takeUntil(action$.ofType(TodoAction.GET_TODO_CANCELLED));
            })

    static getTodosCancel = (action$) =>
        action$.ofType(TodoAction.GET_TODO_CANCELLED)
            .switchMap(({ payload }) => {
                ref.off();
                return Observable.of({ type: TodoAction.NULL })
                //we dont want to do any work on GET_TODO_CANCELLED so we are dispatching NULL action
            })

}