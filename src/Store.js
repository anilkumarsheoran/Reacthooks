import React from 'react'
const initialState = {counter : 0, characters: [] }

const store =  React.createContext(initialState);

export default store