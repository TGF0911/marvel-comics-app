import { IImage, CharacterList } from "./Character";
import { ComicList } from "./Comic";
import { StoryList } from "./Story";

export interface SeriesSummary{
    resourceURI: string;
    name: string;
}

export interface SeriesList{
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}

export interface Serie{
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail: IImage;
  comics: ComicList;
  stories: StoryList;
  characters: CharacterList;
}