import { Comic } from '../../interfaces/Comic';

import styles from './Comic.module.scss';

interface ComicProps {
  comic: Comic;
}

export default function ComicDetails({ comic }: ComicProps) {
  // const [comic, setComic] = useState<Comic>({} as Comic);
  // async function getComic(id: number) {
  //   await api.get(`/comics/${id}`).then(({ data }: any) => {
  //     setComic(data.data.results[0]);
  //   });
  // }
  return (
    <div>
      <h1>{comic.title}</h1>
      <p>{comic.description}</p>
    </div>
  );
}
