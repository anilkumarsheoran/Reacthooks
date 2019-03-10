import React, {  useState,useContext, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Reducer from './Reducer'
import initialState from './Store'
import Counter from './Counter'
import Characters from './Characters'
import FavCharacter from './FavCharacter'

export const storeContext = React.createContext({});
const App = (props) => {
    const [count,changeCount] = useState(0);
    // const data = useContext(store)
    const [state,dispatch] = useReducer(Reducer,initialState)
   
    return (
      <div className="App">
        <storeContext.Provider value={{state,dispatch}} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Testing Hooks</p>
          <p>Counter Example with useState</p>
          <span onClick={() => changeCount(count-1)}>-</span>{count}
          <span onClick={() => changeCount(count+1)}>+</span>

          <p>Counter Example with useState, useEffect and replicate the redux behavior</p>
           <Counter/>

          <p>Marvel Character List</p>
          <FavCharacter/>
          {/* <FavCharacter /> */}
          <Characters/>
        </header>
       </storeContext.Provider>
      </div>
    );
}

export default App;
