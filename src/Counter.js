import React,{useContext} from 'react';
import { storeContext } from './App'


const Counter = ( ) => {
    const store = useContext(storeContext)
    const {dispatch, state } = store
    return (<React.Fragment>
        <span onClick={() => dispatch({type:'Decrement_Counter'})}>-</span>{state && state.counter}
          <span onClick={() => dispatch({type:'Increment_Counter'})}>+</span></React.Fragment>
    )
}

export default Counter