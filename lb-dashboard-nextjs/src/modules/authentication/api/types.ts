export type LoginRequestBody = {
  username: string;
  password: string;
};

export type RecoveryRequestBody = {
  username: string;
};

export type LoginResponseData = String;

export type LogoutResponseData = String;

export type RecoveryResponseData = String;
