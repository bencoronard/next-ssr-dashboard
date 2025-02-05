import { Resource } from "../models/types";

export type CreateResourceRequestBody = Omit<Resource, "id">;
export type UpdateResourceRequestBody = Partial<CreateResourceRequestBody>;

export type CreateResourceResponseData = String;
export type ReadResourceResponseData = Resource;
export type UpdateResourceResponseData = String;
export type DeleteResourceResponseData = String;
