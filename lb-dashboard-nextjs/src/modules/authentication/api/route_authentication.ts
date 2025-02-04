import httpClient from "@/modules/common/http/client";
import { GlobalApiResponseBody } from "@/modules/common/http/types";
import {
  ForgotRequestBody,
  ForgotResponseData,
  LoginRequestBody,
  LoginResponseData,
  LogoutResponseData,
} from "../types/type_authentication";

export async function createSession(body: LoginRequestBody) {
  const path = "/api/v1/sessions";
  return httpClient.post<GlobalApiResponseBody<LoginResponseData>>(path, body);
}

export async function deleteSession() {
  const path = "/api/v1/sessions";
  return httpClient.delete<GlobalApiResponseBody<LogoutResponseData>>(path);
}

export async function recover(body: ForgotRequestBody) {
  const path = "/api/v1/recovery";
  return httpClient.post<GlobalApiResponseBody<ForgotResponseData>>(path, body);
}
