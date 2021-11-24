import Image from 'next/image';
import {GoPlus} from 'react-icons/go'
import spider from '../../assets/spider.jpg'
import styles from './EventCard.module.scss';

export const EventCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={spider} alt="Spider-Man"  />
      </div>


      <div className={styles.description}>
      <h4>Spider-Man</h4>  {/*Isso vai se tornar um link*/}
      <strong>Description</strong>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit libero dolorem nam, est, hic tempore quis aut aspernatur accusantium corrupti minima, explicabo culpa sit! Laborum vel excepturi sed dolores neque! </p>

     
      </div>
    </div>
  )
}