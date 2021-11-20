import { Character } from "../../interfaces/Character";

import styles from "./Character.module.scss";

interface CharacterProps {
  character: Character;
}

export default function CharacterDetails({ character} : CharacterProps) {
  return (
    <div className={styles.container} >
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  );
}