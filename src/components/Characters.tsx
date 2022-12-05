import { useQuery } from 'react-query'
import { Character } from './Character'
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
    <div className="characters">
      {status === 'success' && data?.results.map((character, index) => (
        <Character {...character} key={index}/>
      ))}
    </div>
  )
}
