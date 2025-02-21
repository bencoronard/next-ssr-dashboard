export type GlobalApiResponseBody<T> = {
  code: string;
  message: string;
  payload: T;
};

export type Paginable = {
  page: number;
  size: number;
};

export type Paginated<T> = {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
};
