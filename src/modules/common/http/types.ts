export type GlobalApiResponseBody<T> = {
  code: string;
  message: string;
  payload: T;
};
