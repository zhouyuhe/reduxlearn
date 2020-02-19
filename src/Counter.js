import React from 'react'
import { connect } from 'react-redux'

function Counter(props){
    console.log('render', props)
    return (
        <div>
            <h1> I am a counter!</h1>
            <p> Count: {props.count} </p>
            <button onClick = {props.onIncrementCLick}> Increment </button>
            <button onClick = {props.onDecrementClick}> Decrement </button>
        </div>
    )
}


function mapStateToProps(state){
    console.log('mapStateToProps',state)
    return{
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementCLick: () => {
            console.log('clickin')
            const action = { type: 'INCREMENT'}
            dispatch(action)
        },
        onDecrementClick: () => {
            console.log('clickD')
            const action = {type: 'DECREMENT'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);