import axios from 'axios';
import React, { useEffect } from 'react'
import CharacterTitle from './CharacterTitle'

const getCharacters= (dispatch) => {
    axios({
        method: 'get',
        // headers: {"Access-Control-Allow-Origin": "*"},
        url:'https://gateway.marvel.com/v1/public/characters?apikey=7be7cdc5f911a1c0d78d9229153ed6f1&hash=952f3f763c07f7497547e62250851b8f&ts=1'
        }
    ).then(function(response){
        dispatch({type:'Character_API_Success', character: response})
        console.log('success response',+response)
    }).catch(function(error){
        console.log('error scenario',+error)
    })
}

const Characters = ({ state, dispatch }) => {
    const { characters } = state
    useEffect(()=> {
        getCharacters(dispatch)
    },[])
    return (<div style={{    display: 'block'}}>{characters.length > 0 && characters.map(character => <CharacterTitle key={character.id}  character={character}/>)}</div>)
}

export default Characters