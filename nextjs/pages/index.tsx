import Head from 'next/head'
import styles from "../styles/Home.module.css"
import { CharacterResponse } from "../shared/types"
import { Character } from '../components/Character'
import Link from 'next/link'

export async function getServerSideProps() {
  const characterResponse = await fetch(`https://rickandmortyapi.com/api/character`)
  const data = await characterResponse.json()

  return {
    props: {
      response: data,
    },
  };
}

type CharacterProps = {
  response: CharacterResponse
}

export default function Home({ response }: CharacterProps) {
  return (
    <div className={styles.app}>
      <Head>
        <title>Pokemon App - NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Rick and Morty</h1>
        <div className={styles.characters}>
          {response.results.map((character, index) => (
            <Character {...character} key={index} />
          ))}
          <div>
            <Link href="/">
              <button disabled={!response?.info.prev}>
                Previous
              </button>
            </Link>
            <Link href="/2">
              <button disabled={!response?.info.next}>
                Next
              </button>
            </Link>
            <p style={{ display: 'inline', color: 'white' }}>{1}/{response?.info.pages}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
