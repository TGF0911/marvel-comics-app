import { Character } from '../../interfaces/Character';

import styles from './Character.module.scss';

interface CharacterProps {
  character: Character;
}

export default function CharacterDetails({ character }: CharacterProps) {
  // const [characterDetails, setCharacter] = useState<Character>({} as Character);
  // async function getCharacter(id: number) {
  //   await api
  //     .get(`/characters/${id}`, { params: { limit: 6 } })
  //     .then(({ data }: any) => {
  //       setCharacter(data.data.results[0]);
  //     });
  // }
  return (
    <div className={styles.container}>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  );
}
