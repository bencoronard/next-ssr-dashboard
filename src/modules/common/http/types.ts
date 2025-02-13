export type GlobalApiResponseBody<T> = {
  respCode: string;
  respMsg: string;
  data: T;
};
