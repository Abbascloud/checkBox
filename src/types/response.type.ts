type responseResultItem = {
  name: string;
  id: string;
  status: string;
  [key: string]: unknown;
};

export interface IResponse {
  info: { count: number; next: string; pages: number; prev: null | number };
  results: Array<responseResultItem>;
}
