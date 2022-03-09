import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Character } from "../types/types";

interface PropsCharactersContext {
    characters: Character[];
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

const DEFAULT_VALUE = {
    characters: [] as Character[],
    setCharacters: () => {},
}

const CharactersContext = createContext<PropsCharactersContext>(DEFAULT_VALUE)

const CharactersContextProvider: React.FC = ({ children }) => {
    const[characters, setCharacters] = useState(DEFAULT_VALUE.characters)
    
    const getAllCharacters = async() => {
        await api.get<Character[]>('ninjas')
          .then(data => setCharacters(data.data))
          .catch(error => console.error(error))
    }
    useEffect(() => {
        getAllCharacters()
    }, [])
    return(
        <CharactersContext.Provider
            value={{
                characters,
                setCharacters,
            }}
        >
            {children}
        </CharactersContext.Provider>
    )
}

export { CharactersContextProvider }
export default CharactersContext