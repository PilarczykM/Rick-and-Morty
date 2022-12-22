import { useQuery } from 'react-query'
import {useState} from 'preact/hooks'
import { Character } from './Character'
import { CharacterResponse } from '../shared/types'

export const Characters = () => {
  const [page, setPage] = useState(1)
  
  const {data, status} = useQuery<CharacterResponse, Error>({
    queryKey: ['characters', page],
    queryFn: async ({signal, queryKey}) => {
      const characterResponse = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`, {
        signal,
      })

      return await characterResponse.json()
    },
    keepPreviousData: true,
  })

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
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data?.info.next}
        >
          Next
        </button>
        <p style="display: inline; color: white">{page}/{data?.info.pages}</p>
      </div>
    </div>
  )
}
