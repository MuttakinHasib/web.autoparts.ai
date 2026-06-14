export interface IComment {
  author: string;
  avatar: string;
  children?: this[];
  date: string;
  id: number;
  postTitle?: string;
  text: string;
}
