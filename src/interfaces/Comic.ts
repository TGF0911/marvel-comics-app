import { CharacterSummary, IImage, Url } from './Character';
import { CreatorList } from './Creator';
import { SeriesSummary } from './Series';
import { StorySummary } from './Story';

interface ComicSummary {
  resourceURI?: string;
  name?: string;
}

export interface ComicList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ComicSummary[];
}

export interface Comic {
  id?: number;
  title?: string;
  description?: string;
  modified?: string;
  isbn?: string;
  ean?: string;
  format?: string;
  pageCount?: number;
  resourceURI?: string;
  urls?: Url[];
  series?: SeriesSummary;
  variants?: ComicSummary[];
  collections?: ComicSummary[];
  collectedIssues?: ComicSummary[];
  dates?: Date[];
  thumbnail?: IImage;
  images?: IImage[];
  creators?: CreatorList;
  characters?: CharacterSummary[];
  stories?: StorySummary[];
}
