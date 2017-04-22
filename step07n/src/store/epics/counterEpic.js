// Update in Counter 14 -- Creating Epic
import { Observable } from 'rxjs';
import CounterAction from '../actions/counter'
export default class CounterEpic {

    static incrementWithValue(action$){
        console.log(action$);
        
        return action$.ofType(CounterAction.INCREMENT_WITH_VALUE)
            .mergeMap(()=>{
                // Server call, firebase call or any other business logic
                // Using hard coded values
                return Observable.of(CounterAction.incrementWithValueSuccessful(5));
            })
    }

    /*
    static incrementWithValue(action$){
        action$.ofType(CounterAction.INCREMENT_WITH_VALUE)
            .mergeMap(()=>{
                Observable.of({ 
                    type: 'INCREMENT_WITH_VALUE',
                    val: value
                })
            })
    }
    */
}