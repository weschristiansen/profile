import React, { PureComponent } from 'react'
import {push} from 'connected-react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {increment, incrementAsync, decrement, decrementAsync} from '../../modules/counter'

class Home extends PureComponent {
    render() {
        const { count, changePage, increment, incrementAsync, isIncrementing, isDecrementing, decrement, decrementAsync } = this.props;
        return (
            <div>
                <h1>Home</h1>
                <p>Count: {count}</p>
                <p>
                    <button onClick={increment}>Increment</button>
                    <button onClick={incrementAsync} disabled={isIncrementing}>Increment Async</button>
                </p>
                <p>
                    <button onClick={decrement}>Decrementing</button>
                    <button onClick={decrementAsync} disabled={isDecrementing}>Decrement Async</button>
                </p>
                <p>
                    <button onClick={changePage}>Go to about page via redux</button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = ({counter}) => ({count: counter.count, isIncrementing: counter.isIncrementing, isDecrementing: counter.isDecrementing});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    changePage: () => push('/about-us')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);