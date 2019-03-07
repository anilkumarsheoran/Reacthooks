const Reducer = (state, action) => { 


    switch(action.type) {
      case 'Increment_Counter':
        return {...state, counter: state.counter+1 } ; 
      case 'Decrement_Counter':
        return {...state, counter: state.counter-1 };
      case 'Character_API_Success':
        return {...state, characters: action.character.data.data.results };
      default:
       return state 
    }
}

export default Reducer