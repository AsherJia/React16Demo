import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, reduction, autoIncrement } from './actions/counter'

class Home extends Component {
    render() {
        const { counter } = this.props

        return (
            <div>
                <h1>{`Counter: ${counter}`}</h1>
                <div onClick={this.props.increment}> INCREMENT </div>
                <div onClick={this.props.reduction}> REDUCTION </div>
                <div onClick={this.props.autoIncrement}> AUTO_INCREMENT </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.pageData.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: bindActionCreators(increment, dispatch),
        reduction: bindActionCreators(reduction, dispatch),
        autoIncrement: bindActionCreators(autoIncrement, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
