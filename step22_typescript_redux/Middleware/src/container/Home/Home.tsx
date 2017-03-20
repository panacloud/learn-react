import * as React from "react";
import { connect } from "react-redux";

import { CounterAction as Action } from '../../store/action/counter';
import { GitAction } from '../../store/action/git';
import { Back } from "../../component/Back/Back";
import { ShowCounter } from "../../component/CounterShow/Counter";

function mapStateToProps(state: any) {
    return {
        counter: state.counterReducer['count'],
        userData: state.gitReducer['userData'],
        isLoading: state.gitReducer['isLoading'],
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        incrmnt: (): void => dispatch(Action.increment()),
        decrmnt: (): void => dispatch(Action.decrement()),
        getData: (): void => dispatch((GitAction.getDataFromUrl()))
    };
}

// note: React.Component<props, state>
class Home extends React.Component<any, any> {

    constructor() {
        super();
        setTimeout(() => {
            this.props.getData();
        }, 2000)
    }


    render() {
        return (
            <div>
                <h1>
                    Home Page
                </h1>
                <ShowCounter counter={this.props.counter} />
                <div style={{ margin: 20 }}>
                    <button onClick={this.props.incrmnt} style={{ color: 'green' }}> <b>Incr ++</b> </button> <button onClick={this.props.decrmnt} style={{ color: 'red' }}> <b>Decr --</b> </button>
                </div>
                <pre>
                    {(this.props.isLoading) ? 'Loading Data....... ' : JSON.stringify(this.props.userData, null, 2)}
                </pre>
                <Back />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);