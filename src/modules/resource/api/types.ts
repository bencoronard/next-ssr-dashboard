import { Resource } from "../models/types";

export type CreateResourceRequestBody = Omit<
  Resource,
  "id" | "tenant" | "createdBy"
>;
export type UpdateResourceRequestBody = Partial<CreateResourceRequestBody>;

export type CreateResourceResponseData = String;
export type ReadResourceResponseData = Resource;
export type ListResourceResponseData = Resource[];
export type UpdateResourceResponseData = String;
export type DeleteResourceResponseData = String;
