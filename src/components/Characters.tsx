import { useEffect, useState } from 'preact/hooks'
import { Character, CharacterResponse, Info } from './types'

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [info, setInfo] = useState<Info>()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    fetchCharacters(signal)

    return () => {
      controller.abort()
    }
  }, [])

  const fetchCharacters = async (signal: AbortSignal) => {
    const response = await fetch('https://rickandmortyapi.com/api/character', { signal })
    if (response.ok) {
      const characterResponse: CharacterResponse = await response.json()
      setCharacters(characterResponse.results)
      setInfo(characterResponse.info)
    }
  }

  return <div>{characters && characters.map((character, index) => <li key={index}>{character.name}</li>)}</div>
}
