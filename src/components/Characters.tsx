import {useEffect, useState} from "preact/hooks"
import { Character, CharacterResponse, Info } from "./types";

export const Characters = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [info, setInfo] = useState<Info>()

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal;
        fetchCharacters(signal)
        
        return () => {
            controller.abort()
        };
      },[]);
    

    const fetchCharacters = async (signal: AbortSignal) => {
        const response = await fetch("https://rickandmortyapi.com/api/character", {signal})
        if (response.ok) {
            const characterResponse: CharacterResponse = await response.json()
            setCharacters(characterResponse.results)
            setInfo(characterResponse.info)
        }
    }

    return (
        <div>{characters && characters.map(character => (
            <li>{character.name}</li>)
        )}</div>
    )
}