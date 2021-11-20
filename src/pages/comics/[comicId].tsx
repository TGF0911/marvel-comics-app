import { Comic } from "../../interfaces/Comic";

import styles from './Comic.module.scss'

interface ComicProps {
  comic: Comic;
}

export default function ComicDetails({comic}: ComicProps) {
  return (
    <div>
      <h1>{comic.title}</h1>
      <p>{comic.description}</p>
     
    </div>
  );
}