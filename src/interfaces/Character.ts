import { ComicList } from "./Comic";
import { SeriesList } from "./Series";
import { StoryList } from "./Story";

export interface IImage{
  path: string;
  extension: string;
}

export interface Url{
  type: string;
  url: string;
}

export interface CharacterList{
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterSummary[];
}

export interface CharacterSummary{
  resourceURI: string;
  name: string;
  role: string;
}

export interface Character{
  id: number;
  name: string;
  description: string;
  thumbnail: IImage;
  comics: ComicList;
  series: SeriesList;
  stories: StoryList;
  urk: Url[];
}

export interface CharacterDataContainer{
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}