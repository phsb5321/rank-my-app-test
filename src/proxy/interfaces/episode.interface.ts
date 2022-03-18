export interface IEpisode {
  id: 1;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface ICharacterRawResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: IEpisode[];
}
