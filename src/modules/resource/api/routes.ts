import httpClient from "@/modules/common/http/client";
import {
  CreateResourceRequestBody,
  CreateResourceResponseData,
  DeleteResourceResponseData,
  ListResourceResponseData,
  ReadResourceResponseData,
  UpdateResourceRequestBody,
  UpdateResourceResponseData,
} from "./types";
import { GlobalApiResponseBody } from "@/modules/common/http/types";

const BASE_PATH = "/api/v1/resources";

export async function listResources() {
  const path = BASE_PATH;
  return httpClient.get<GlobalApiResponseBody<ListResourceResponseData>>(path);
}

export async function retrieveResource(id: number) {
  const path = `${BASE_PATH}/${id}`;
  return httpClient.get<GlobalApiResponseBody<ReadResourceResponseData>>(path);
}

export async function deleteResource(id: number) {
  const path = `${BASE_PATH}/${id}`;
  return httpClient.delete<GlobalApiResponseBody<DeleteResourceResponseData>>(
    path
  );
}

export async function createResource(body: CreateResourceRequestBody) {
  const path = BASE_PATH;
  return httpClient.post<GlobalApiResponseBody<CreateResourceResponseData>>(
    path,
    body
  );
}

export async function updateResource(
  id: number,
  body: UpdateResourceRequestBody
) {
  const path = `${BASE_PATH}/${id}`;
  return httpClient.put<GlobalApiResponseBody<UpdateResourceResponseData>>(
    path,
    body
  );
}
