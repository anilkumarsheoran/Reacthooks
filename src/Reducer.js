const Reducer = (state, action) => { 


    switch(action.type) {
      case 'Increment_Counter':
        return {...state, counter: state.counter+1 } ; 
      case 'Decrement_Counter':
        return {...state, counter: state.counter-1 };
      case 'Character_API_Success':
        return {...state, characters: action.character.data.data.results };
      case 'Add_To_Fav':
        return {...state, favList:[...state.favList, action.favData]};
      case 'Remove_Fav_Charater':
        return {...state,favList:state.favList.filter(fav => action.id !== fav.id) }
      default:
       return state 
    }
}

export default Reducer