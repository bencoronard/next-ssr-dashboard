import React from "react";
import { makeAutoObservable } from "mobx";
import { Resource } from "../models/types";
import {
  createResource,
  deleteResource,
  listResources,
  retrieveResource,
  updateResource,
} from "../api/routes";
import { pauseExecution } from "@/modules/common/utilities/executionFlow";

const mockData: Resource[] = [
  {
    id: 1,
    field1: "Alpha",
    field2: "Beta",
    field3: "Gamma",
    createdBy: "User 1",
  },
  {
    id: 2,
    field1: "Delta",
    field2: "Epsilon",
    field3: "Zeta",
    createdBy: "User 2",
  },
  {
    id: 3,
    field1: "Eta",
    field2: "Theta",
    field3: "Iota",
    createdBy: "User 3",
  },
  {
    id: 4,
    field1: "Kappa",
    field2: "Lambda",
    field3: "Mu",
    createdBy: "User 4",
  },
  {
    id: 5,
    field1: "Nu",
    field2: "Xi",
    field3: "Omicron",
    createdBy: "User 5",
  },
];

class ResourceContext {
  resources: Resource[] = [];
  focusedId: number | null = null;
  isLoading: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
    list: boolean;
  } = {
    create: false,
    update: false,
    delete: false,
    read: false,
    list: false,
  };

  private setResources = (resources: Resource[]) => {
    this.resources = resources;
  };
  private setFocused = (resourceId: number | null) => {
    this.focusedId = resourceId;
  };
  private setLoadingList = (loading: boolean) => {
    this.isLoading.list = loading;
  };
  private setLoadingRead = (loading: boolean) => {
    this.isLoading.read = loading;
  };
  private setLoadingCreate = (loading: boolean) => {
    this.isLoading.create = loading;
  };
  private setLoadingUpdate = (loading: boolean) => {
    this.isLoading.update = loading;
  };
  private setLoadingDelete = (loading: boolean) => {
    this.isLoading.delete = loading;
  };

  constructor() {
    makeAutoObservable(this);
  }

  listResources = async () => {
    this.setLoadingList(true);
    try {
      const response = (await listResources()).data.payload;
      this.setResources(response.content);
      // await pauseExecution(500);
      // this.setResources(mockData);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingList(false);
    }
  };

  readResource = async (id: number) => {
    this.setLoadingRead(true);
    this.setFocused(id);
    try {
      const resource = (await retrieveResource(id)).data.payload;
      this.setFocused(resource.id);
      return resource;
      // await pauseExecution(500);
      // return mockData.find((item) => item.id === id);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingRead(false);
      this.setFocused(null);
    }
  };

  createResource = async (field1: string, field2: string, field3: string) => {
    this.setLoadingCreate(true);
    try {
      const response = (await createResource({ field1, field2, field3 })).data
        .payload;
      return response.id;
      // await pauseExecution(500);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingCreate(false);
    }
  };

  updateResource = async (
    id: number,
    field1: string,
    field2: string,
    field3: string
  ) => {
    this.setLoadingUpdate(true);
    this.setFocused(id);
    try {
      const response = (await updateResource(id, { field1, field2, field3 }))
        .data.payload;
      return response.id;
      // await pauseExecution(500);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingUpdate(false);
      this.setFocused(null);
    }
  };

  deleteResource = async (id: number) => {
    this.setLoadingDelete(true);
    this.setFocused(id);
    try {
      const response = (await deleteResource(id)).data.payload;
      return response.id;
      // await pauseExecution(500);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingDelete(false);
      this.setFocused(null);
    }
  };
}

export const resourceContext = React.createContext(new ResourceContext());
