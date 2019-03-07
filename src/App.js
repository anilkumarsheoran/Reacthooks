import React, {  useState,useContext, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Reducer from './Reducer'
import store from './Store'
import Counter from './Counter'
import Characters from './Characters'

const App = (props) => {
    const [count,changeCount] = useState(0);
    const data = useContext(store)
    const [state,dispatch] = useReducer(Reducer,data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Testing Hooks</p>
          <p>Counter Example with useState</p>
          <span onClick={() => changeCount(count-1)}>-</span>{count}
          <span onClick={() => changeCount(count+1)}>+</span>

          <p>Counter Example with useState, useEffect and replicate the redux behavior</p>
           <Counter state={state} dispatch={dispatch}/>

          <p>Marvel Character List</p>
          <Characters state={state} dispatch={dispatch}/>
        </header>
       
      </div>
    );
}

export default App;
