export interface HNSearchData {
  hits: HNHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: {
    _request: {
      roundTrip: number;
    };
    afterFetch: {
      total: number;
    };
    total: number;
  };
  serverTimeMS: number;
}

export interface HNHit {
  created_at: string;
  title: string;
  url: string | null;
  author: string;
  points: number;
  story_text: string | null;
  comment_text: string | null;
  num_comments: number;
  story_id: string | null;
  story_title: string | null;
  story_url: string | null;
  parent_id: string | null;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: {
    title: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    author: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    story_text: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
  }
}