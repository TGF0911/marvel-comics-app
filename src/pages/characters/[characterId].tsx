import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Character } from '../../interfaces/Character';
import { api } from '../../services/api';

import spider from '../../assets/spider.jpg';

import styles from './Character.module.scss';
import { Comic } from '../../interfaces/Comic';
import { useCard } from '../../context/CardContext';

// src={`${path}/standard_medium.${characterDetails.thumbnail.extension}`}

export default function CharacterDetails() {
  const router = useRouter();
  const { characterId } = router.query;

  if (router.isFallback) return <p>Carregando....</p>;

  const { comics, getComicsByCharacter } = useCard();
  const [characterDetails, setCharacter] = useState<Character>({} as Character);

  useEffect(() => {
    console.log('characterId', characterId);
    api.get(`/characters/${characterId}`).then(({ data }: any) => {
      setCharacter(data.data.results[0]);
      // console.log(characterDetails.thumbnail.path);
    });

    if (characterDetails.comics) {
      getComicsByCharacter(String(characterId));
    }
  }, [characterId]);

  return (
    <div className={styles.container}>
      <div className={styles.character}>
        <Image src={spider} />

        <div className={styles.description}>
          <h1>Abomination (Emil Blonsky)</h1>

          <p>{characterDetails.description}</p>
        </div>
      </div>

      {comics && comics.length > 0 && (
        <div className={styles.comics}>
          <h2>Comics</h2>
          <p>{comics}</p>
        </div>
      )}

      <div className={styles.series}></div>

      <div className={styles.stories}></div>

      <div className={styles.events}></div>
    </div>
  );
}
