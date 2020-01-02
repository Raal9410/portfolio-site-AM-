import React from 'react'
import {createStore} from 'redux';

export default function redux() {

//REDUX LESSON

const store = createStore((state = { count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {count: state.count + incrementBy}
            case 'DECREMENT': 
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {count: state.count - decrementBy}
        case 'RESET':
            return {count: 0}
        default:
            return state;
    }
});

store.subscribe(() =>{
    console.log('Current state', store.getState());
})


//Actions - is an object that get sent to the store, describes the type of action. Changes the state overtime 

//increment action
store.dispatch({
    type : 'INCREMENT',
    incrementBy: 5
});
store.dispatch({
    type : 'INCREMENT'
});

//reset action
store.dispatch({
    type: 'RESET'
})

//decrement action
store.dispatch({
    type: 'DECREMENT',
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})



//
    return (
        <div>
            <h1>Redux Lesson</h1>
        </div>
    )
}


