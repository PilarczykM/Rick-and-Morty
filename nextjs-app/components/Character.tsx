import { CharacterProp } from "../shared/types"
import Image from "next/image"
import styles from "./Character.module.css"

export const Character = (character: CharacterProp) => {
    return (
      <div className={styles.card}>
        <div style={{width: '15rem', height: '100%', position: 'relative'}}>
            <Image src={character.image} alt="" fill quality={80} sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"/>
        </div>
        <div className={styles.text_container}>
          <h3>{character.name}</h3>
          <p className={styles.status}>
            {character.status} - {character.species}
          </p>
          <p className={styles.title}>Last seen on</p>
          <p>{character.location.name}</p>
        </div>
      </div>
    )
  }