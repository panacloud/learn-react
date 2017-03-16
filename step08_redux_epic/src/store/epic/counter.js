import { Observable } from "rxjs";
import CounterAction from '../actions/counter'

class CounterEpic {

    increment = (action$) =>
        action$.ofType(CounterAction.INCREMENT_ASYNC)
            .delay(1000) //this delay may be Async call to server or a database request
            .switchMap(({ payload }) => {
                return Observable.of({
                    type: CounterAction.INCREMENT,
                    payload: null
                });
            })

    decrement = (action$) =>
        action$.ofType(CounterAction.DECREMENT_ASYNC)
            .delay(1000) //this delay may be Async call to server or a database request
            .switchMap(({ payload }) => {
                return Observable.of({
                    type: CounterAction.DECREMENT,
                    payload: null
                });
            })
}
export let counterEpic = new CounterEpic();