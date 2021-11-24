import { CharacterList, IImage } from "./Character";
import { ComicList } from "./Comic";
import { SeriesList } from "./Series";

export interface IEvent{
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