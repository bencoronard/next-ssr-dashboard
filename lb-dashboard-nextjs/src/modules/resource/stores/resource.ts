import React from "react";
import { makeAutoObservable } from "mobx";
import { Resource } from "../models/types";
import {
  createResource,
  deleteResource,
  listResources,
  readResource,
  updateResource,
} from "../api/routes";
import { pauseExecution } from "@/modules/common/utilities/executionFlow";

const mockData: Resource[] = [
  {
    id: 1,
    field1: "Alpha",
    field2: "Beta",
    field3: "Gamma",
    tenant: "Tenant A",
    createdBy: "User 1",
  },
  {
    id: 2,
    field1: "Delta",
    field2: "Epsilon",
    field3: "Zeta",
    tenant: "Tenant B",
    createdBy: "User 2",
  },
  {
    id: 3,
    field1: "Eta",
    field2: "Theta",
    field3: "Iota",
    tenant: "Tenant C",
    createdBy: "User 3",
  },
  {
    id: 4,
    field1: "Kappa",
    field2: "Lambda",
    field3: "Mu",
    tenant: "Tenant D",
    createdBy: "User 4",
  },
  {
    id: 5,
    field1: "Nu",
    field2: "Xi",
    field3: "Omicron",
    tenant: "Tenant E",
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

  setResources(resources: Resource[]) {
    this.resources = resources;
  }
  setFocused(resourceId: number | null) {
    this.focusedId = resourceId;
  }
  setLoadingList(loading: boolean) {
    this.isLoading.list = loading;
  }
  setLoadingRead(loading: boolean) {
    this.isLoading.read = loading;
  }
  setLoadingCreate(loading: boolean) {
    this.isLoading.create = loading;
  }
  setLoadingUpdate(loading: boolean) {
    this.isLoading.update = loading;
  }
  setLoadingDelete(loading: boolean) {
    this.isLoading.delete = loading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async listResources() {
    this.setLoadingList(true);
    try {
      // const resources = (await listResources()).data.data;
      // this.setResources(resources)
      await pauseExecution(500);
      this.setResources(mockData);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingList(false);
    }
  }

  async readResource(id: number) {
    this.setLoadingRead(true);
    try {
      // const resource = (await readResource(id)).data.data;
      // this.setFocused(resource.id);
      // return resource;
      await pauseExecution(500);
      const resource = mockData.find((item) => item.id === id);
      this.setFocused(resource ? resource.id : null);
      return resource;
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingRead(false);
    }
  }

  async createResource(field1: string, field2: string, field3: string) {
    this.setLoadingCreate(true);
    try {
      // const createdId = (await createResource({ field1, field2, field3 })).data.data;
      // return createdId;
      await pauseExecution(500);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingCreate(false);
    }
  }

  async updateResource(
    id: number,
    field1: string,
    field2: string,
    field3: string
  ) {
    this.setLoadingUpdate(true);
    try {
      // const updatedId = (await updateResource(id, { field1, field2, field3 })).data.data;
      // return updatedId;
      await pauseExecution(500);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingUpdate(false);
    }
  }

  async deleteResource(id: number) {
    this.setLoadingDelete(true);
    try {
      // const deletedId = (await deleteResource(id)).data.data;
      // return deletedId;
      await pauseExecution(500);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingDelete(false);
    }
  }
}

export const resourceContext = React.createContext(new ResourceContext());
