import { Character } from "../components/Character";
import { CharacterResponse } from "../shared/types";
import styles from "./styles.module.css"

async function getCharacters() {
    
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=1`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Home() {
  const characters: CharacterResponse = await getCharacters();

  return (
    <div className={styles.characters}>
        {characters.results.map((character, index) => (
          <Character {...character} key={index} />
        ))}
    </div>
  );
}

export default Home;
