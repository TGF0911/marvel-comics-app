import Image from 'next/image';
import { GoPlus } from 'react-icons/go';
import comicImg from '../../assets/comic_test.jpg';
import { IImage } from '../../interfaces/Character';
import { Comic } from '../../interfaces/Comic';
import styles from './ComicCard.module.scss';

interface ComicCardProps {
  comic: Comic;
}

export const ComicCard = ({ comic }: ComicCardProps) => {
  function getThumbnail(thumbnail: IImage) {
    if (thumbnail) {
      return `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
    } else {
      return comicImg;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image src={getThumbnail(comic.thumbnail)} alt="Spider-Man" />
      </div>

      <h4>{comic.title}</h4>

      <div className={styles.description}>
        <strong>Description</strong>
        <p>{comic.description}</p>

        <div className={styles.button}>
          {' '}
          <GoPlus size={16} color="#000" /> <p>detalhes</p>
        </div>
      </div>
    </div>
  );
};
