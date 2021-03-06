import { CharacterList, IImage } from "./Character";
import { ComicList } from "./Comic";
import { SeriesList } from "./Series";

export interface StorySummary{
    resourceURI: string;
    name: string;
    type: string;
}

export interface StoryList{
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

export interface Story{
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail: IImage;
  comics: ComicList;
  series: SeriesList;
  characters: CharacterList;
}