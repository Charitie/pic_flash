export type PageData = {
  page: number;
  total?: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (page: number) => void;
};
