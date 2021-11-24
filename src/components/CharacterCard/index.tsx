import Image from 'next/image';
import { GoPlus } from 'react-icons/go';
import spider from '../../assets/spider.jpg';
import { Character } from '../../interfaces/Character';
import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image src={spider} alt="Spider-Man" />
      </div>

      <h4>{character.name}</h4>

      <div className={styles.description}>
        <strong>Description</strong>
        <p>{character.description}</p>

        <div className={styles.button}>
          {' '}
          <GoPlus size={16} color="#000" /> <p>detalhes</p>
        </div>
      </div>
    </div>
  );
};
function useState<T>(arg0: Character): [any, any] {
  throw new Error('Function not implemented.');
}
