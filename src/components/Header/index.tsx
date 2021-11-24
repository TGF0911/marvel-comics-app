import Image from 'next/image';
import shield from '../../assets/shield.png'


import styles from  './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.container}>
       <Image 
       src={shield}
       width={40}
       height={40}
       alt="Marvel Home"
       />

      <a href="">Characters</a>
      <a href="">Comics</a>
      <a href="">Series</a>
      <a href="">Stories</a>
      <a href="">Events</a>
   
    </header>
  )
}