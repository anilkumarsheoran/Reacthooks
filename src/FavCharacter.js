import React, { useContext } from 'react'
import { storeContext } from './App'

const FavCharacter = () => {
      const store = useContext(storeContext)
    const {dispatch, state } = store
    const { favList } = state
    return (
        <div>
            { favList.length > 0 && favList.map(character=> <div key={character.id} style={{    border: '1px solid black',background: 'grey'}}>
            <span>{character.name}</span><span onClick={() => dispatch({type: 'Remove_Fav_Charater', id: character.id})} style={{color: 'blue'}}>     X</span></div>)

            }
        
        </div>
    )
}

export default FavCharacter