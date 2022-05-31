const redux = require('redux')

const initialState = {
    counter: 0
}

//Reducer
const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }

    return state
    
}

//Store
const store = redux.createStor(reducer)
console.log('1', store.getState())

//Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter)
console.log('2', store.getState())
