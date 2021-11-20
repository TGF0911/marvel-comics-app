import Image from 'next/image';
import spider from '../../assets/spider.jpg'
import styles from './CharacterCard.module.scss';

export const CharacterCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image src={spider} alt="Spider-Man" width={100} height={100} />
      </div>

      <div className={styles.description}>
      <strong>Description</strong>
      <p> Lorem ipsum </p>

      <button>+ detalhes</button>
      </div>
    </div>
  )
}