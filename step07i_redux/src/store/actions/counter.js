// Update in Counter 8 -- Separate action file as class
export default class CounterAction {

    // static properties to be used in reducer for switch cases
    static INCREMENT = "INCREMENT";
    static DECREMENT = "DECREMENT";
    static INCREMENT_WITH_VALUE = "INCREMENT_WITH_VALUE";
    static DECREMENT_WITH_VALUE = "DECREMENT_WITH_VALUE";

    // static functions to be mapped with dispatch in component
    static increment(){
        return { 
            type: 'INCREMENT'
        }
    }

    static decrement(){
        return { 
            type: 'DECREMENT' 
        }
    }

    static incrementWithValue(value){
        return { 
            type: 'INCREMENT_WITH_VALUE',
            val: value
        }
    }

    static decrementWithValue(value){
        return { 
            type: 'DECREMENT_WITH_VALUE',
            val: value
        }
    }
}