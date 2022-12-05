import { useQuery } from 'react-query'
import { CharacterResponse } from './types'

export const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    return response.json()
  }

  const { data, status } = useQuery<CharacterResponse, Error>('characters', fetchCharacters)
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>Error...</div>
  }

  return (
    <div>
      {status === 'success' && data?.results.map((character, index) => (
        <p key={index}>{character.name}</p>
      ))}
    </div>
  )
}
