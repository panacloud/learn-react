import CounterAction from "./../actions/counter";

//Update in counter 13 -- create Middleware
export default class CounterMiddleware {

    //Update in counter 13 -- This function will be called 
    static asyncIncrement(data) {
        console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            data = data * 2;
            dispatch(CounterAction.incrementWithValue(data))
        }
    }

    

   




    
}


    
