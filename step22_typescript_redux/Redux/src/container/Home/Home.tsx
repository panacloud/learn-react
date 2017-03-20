import * as React from "react";
import { connect } from "react-redux";

import { CounterAction as Action } from '../../store/action/counter';
import { ShowCounter } from "../../component/CounterShow/Counter";
import { Back } from "../../component/Back/Back";

function mapStateToProps(state: any) {
    return {
        counter: state.counterReducer['count'],
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        incrmnt: (): void => dispatch(Action.increment()),
        decrmnt: (): void => dispatch(Action.decrement())
    };
}

// note: React.Component<props, state>
class Home extends React.Component<any, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>
                    Home Page
                </h1>
                <ShowCounter counter={this.props.counter}/>
                <div style={{margin: 20}}>
                    <button onClick={this.props.incrmnt} style={{color: 'green'}}> <b>Incr ++</b> </button> 
                    <button onClick={this.props.decrmnt} style={{color: 'red'}}> <b>Decr --</b> </button>
                </div>
                <Back />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);