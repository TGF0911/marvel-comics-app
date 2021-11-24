import Image from 'next/image';
import spider from '../../assets/spider.jpg';
import { IImage } from '../../interfaces/Character';
import { IEvent } from '../../interfaces/Event';
import styles from './EventCard.module.scss';

interface EventCardProps {
  event: IEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  function getThumbnail(thumbnail: IImage) {
    if (thumbnail) {
      return `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
    } else {
      return spider;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={spider} alt="Spider-Man" />
      </div>

      <div className={styles.description}>
        <h4>{event.title}</h4> {/*Isso vai se tornar um link*/}
        <strong>Description</strong>
        <p>{event.description}</p>
      </div>
    </div>
  );
};
