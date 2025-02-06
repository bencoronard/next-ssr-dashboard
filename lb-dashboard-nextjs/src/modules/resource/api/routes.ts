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

export async function createResource(body: CreateResourceRequestBody) {
  const path = "/api/v1/resource";
  return httpClient.post<GlobalApiResponseBody<CreateResourceResponseData>>(
    path,
    body
  );
}

export async function readResource(id: string) {
  const path = `/api/v1/resources/${id}`;
  return httpClient.get<GlobalApiResponseBody<ReadResourceResponseData>>(path);
}

export async function updateResource(
  id: string,
  body: UpdateResourceRequestBody
) {
  const path = `/api/v1/resources/${id}`;
  return httpClient.put<GlobalApiResponseBody<UpdateResourceResponseData>>(
    path,
    body
  );
}

export async function deleteResource(id: string) {
  const path = `/api/v1/resources/${id}`;
  return httpClient.delete<GlobalApiResponseBody<DeleteResourceResponseData>>(
    path
  );
}

export async function listResources() {
  const path = `/api/v1/resources`;
  return httpClient.get<GlobalApiResponseBody<ListResourceResponseData>>(path);
}
