import httpClient from "@/modules/common/http/client";
import { GlobalApiResponseBody } from "@/modules/common/http/types";
import { LoginRequestBody, LoginResponseData } from "../types/type_login";

export async function authenticate(body: LoginRequestBody) {
  const path = "/api/v1/authenticate";
  return httpClient.post<GlobalApiResponseBody<LoginResponseData>>(path, body);
}
