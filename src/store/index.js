import { createStore } from 'redux'

const initialState ={
    count:8
}

const reducer = (state = initialState, action) => {
    console.log('reducer running', action)
    switch(action.type){
        case 'INCREMENT':
            //start with new object, copy of state into, then copy + 1
            return Object.assign({}, state, { count: state.count + 1})
        case 'DECREMENT':
            return Object.assign({}, state, { count: state.count - 1})
        default:
            return state
    }
}

const store = createStore(reducer)

export default store