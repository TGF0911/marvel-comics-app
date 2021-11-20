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