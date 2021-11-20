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