import React from 'react'
import {createStore} from 'redux';

export default function redux() {

//REDUX LESSON

    const store = createStore((state = { count: 0}) => {
    return state;
});

console.log(store.getState());

//
    return (
        <div>
            <h1>Redux Lesson</h1>
        </div>
    )
}


