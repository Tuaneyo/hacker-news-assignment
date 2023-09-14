export interface HNItemData {
  id: number;
  created_at: string;
  created_at_i: number;
  type: string;
  author: string;
  title: string | null;
  url: string | null;
  text: string | null;
  points: number | null;
  parent_id: number | null;
  story_id: number | null;
  children: HNItemData[];
  options: [];
}