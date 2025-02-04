export type LoginRequestBody = {
  username: string;
  password: string;
};

export type LoginResponseData = {
  userId: number;
  firstName: string;
  lastName: string;
};
