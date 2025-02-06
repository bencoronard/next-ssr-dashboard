import React from "react";
import { makeAutoObservable } from "mobx";
import { Resource } from "../models/types";
import { listResources, readResource } from "../api/routes";
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
  focused: Resource | null = null;
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
  setFocused(resource: Resource) {
    this.focused = resource;
  }
  setLoadingList(loading: boolean) {
    this.isLoading.list = loading;
  }
  setLoadingRead(loading: boolean) {
    this.isLoading.read = loading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async listResources() {
    this.setLoadingList(true);
    try {
      // const response = await listResources();
      // this.setResources(response.data.data);
      await pauseExecution(500);
      this.setResources(mockData);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingList(false);
    }
  }

  async readResource(id: string) {
    this.setLoadingRead(true);
    try {
      const response = await readResource(id);
      this.setFocused(response.data.data);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingRead(false);
    }
  }
}

export const resourceContext = React.createContext(new ResourceContext());
