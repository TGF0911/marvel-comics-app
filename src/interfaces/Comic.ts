import { CharacterSummary, IImage, Url } from "./Character";
import { CreatorList } from "./Creator";
import { SeriesSummary } from "./Series";
import { StorySummary } from "./Story";

interface ComicSummary{
  resourceURI: string;
  name: string;
}

export interface ComicList{
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}

export interface Comic{
  id: number;
  digitalId: number;
  title: string;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  resourceURI: string;
  urls: Url[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: Date[];
  thumbnail: IImage;
  images: IImage[];
  creators: CreatorList;
  characters: CharacterSummary[];
  stories: StorySummary[];
}