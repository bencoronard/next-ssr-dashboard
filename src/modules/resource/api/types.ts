import { Paginated } from "@/modules/common/http/types";
import { Resource } from "../models/types";

export type CreateResourceRequestBody = Omit<Resource, "id" | "createdBy">;
export type UpdateResourceRequestBody = Partial<CreateResourceRequestBody>;

export type CreateResourceResponseData = Resource;
export type ReadResourceResponseData = Resource;
export type ListResourceResponseData = Paginated<Resource>;
export type UpdateResourceResponseData = Resource;
export type DeleteResourceResponseData = null;
