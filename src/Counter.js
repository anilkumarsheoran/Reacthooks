import React from 'react';


const Counter = ({state, dispatch} ) => {
    return (<React.Fragment>
        <span onClick={() => dispatch({type:'Decrement_Counter'})}>-</span>{state && state.counter}
          <span onClick={() => dispatch({type:'Increment_Counter'})}>+</span></React.Fragment>
    )
}

export default Counter