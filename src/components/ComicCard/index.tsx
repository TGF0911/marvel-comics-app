import Image from 'next/image';
import {GoPlus} from 'react-icons/go'
import comic from '../../assets/comic_test.jpg'
import styles from './ComicCard.module.scss';

export const ComicCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image src={comic} alt="Spider-Man"  />
      </div>

      <h4>Marvel Previews (2017)</h4>

      <div className={styles.description}>
      <strong>Description</strong>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit libero dolorem nam, est, hic tempore quis aut aspernatur accusantium corrupti minima, explicabo culpa sit! Laborum vel excepturi sed dolores neque! </p>

      <div className={styles.button}> <GoPlus size={16} color="#000"/> <p>detalhes</p></div>
      </div>
    </div>
  )
}