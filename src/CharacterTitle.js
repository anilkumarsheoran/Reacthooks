import React, { useState } from 'react'

const CharacterTitle = ({character}) =>  {
    const [favFlag, changeFavFlag ] = useState(false)
    return (
    <div  style={{border:'2px solid black', width:'340px',  display:'inline-block'}}>
    <img src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`} alt="" />
    <p>{character.name}</p>
    <p style={{ height: '200px', overflow: 'hidden'}}>{character.description}</p>
    <p>Series:- {character.series.available}</p>
    <p>Stories:- {character.stories.available}</p>
    <button style={{}} onClick={()=> changeFavFlag(!favFlag)}>{favFlag ? 'Unfav' : 'Fav'}</button>
    </div>
    )
}

export default CharacterTitle