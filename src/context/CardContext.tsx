import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { Character } from '../interfaces/Character';
import { Comic } from '../interfaces/Comic';
import { Serie } from '../interfaces/Series';
import { IEvent } from '../interfaces/Event';
import { Story } from '../interfaces/Story';

interface CardXContext {
  children: ReactNode;
}

type CardContext = {
  characters: Character[];
  comics: Comic[];
  series: Serie[];
  events: IEvent[];
  stories: Story[];
  getCharacters: () => void;
  getComics: () => void;
  getSeries: () => void;
  getEvents: () => void;
  getStories: () => void;
};

const CardContext = createContext<CardContext>({} as CardContext);

export function CardProvider({ children }: CardXContext) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [comics, setComics] = useState<Comic[]>([]);
  // const [serie, setSerie] = useState<Serie>({} as Serie);
  const [series, setSeries] = useState<Serie[]>([]);
  // const [story, setStory] = useState<Story>({} as Story);
  const [stories, setStories] = useState<Story[]>([]);
  // const [event, setEvent] = useState<IEvent>({} as IEvent);
  const [events, setEvents] = useState<IEvent[]>([]);

  async function getCharacters() {
    await api
      .get(`/characters`, {
        params: {
          limit: 6,
        },
      })
      .then(({ data }: any) => {
        setCharacters(data.data.results);
      });
  }

  async function getComics() {
    await api
      .get(`/comics`, {
        params: {
          limit: 6,
        },
      })
      .then(({ data }: any) => {
        setComics(data.data.results);
      });
  }

  async function getComicsByCharacter(id: number) {
    await api.get(`/characters/${id}/comics`).then(({ data }: any) => {
      setComics(data.data.results);
    });
  }

  async function getStories() {
    await api
      .get(`/stories`, {
        params: {
          limit: 6,
        },
      })
      .then(({ data }: any) => {
        setStories(data.data.results);
      });
  }

  async function getSeries() {
    await api.get(`/series`).then(({ data }: any) => {
      setSeries(data.data.results);
    });
  }

  async function getEvents() {
    await api
      .get(`/events`, {
        params: {
          limit: 1,
        },
      })
      .then(({ data }: any) => {
        setEvents(data.data.results);
      });
  }

  //https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_medium.jpg

  // const defaultThumbanail = useMemo(() => {
  //   const { thumbnail } = character;
  //   return `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
  // }, [character])

  // const largeThumbanail = useMemo(() => {
  //   const { thumbnail } = character;
  //   return `${thumbnail.path}/landscape_amazing.${thumbnail.extension}`;
  // }, [character]);

  return (
    <CardContext.Provider
      value={{
        characters,
        comics,
        series,
        events,
        stories,
        getCharacters,
        getComics,
        getStories,
        getSeries,
        getEvents,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => useContext(CardContext);
