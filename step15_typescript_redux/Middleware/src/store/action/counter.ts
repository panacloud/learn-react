import { createAction } from 'redux-actions';

export class CounterAction {

    static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    static DECREMENT_COUNTER = 'DECREMENT_COUNTER';
    static DUMMY = 'DUMMY';

    static increment() {
        return {
            type: CounterAction.INCREMENT_COUNTER,
        };
    }

    static decrement() {
        return {
            type: CounterAction.DECREMENT_COUNTER,
        };
    }


    static addTodo = createAction<any>(
        CounterAction.DUMMY,
        payload => payload
    );

}
