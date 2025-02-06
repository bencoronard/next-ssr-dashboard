import React from "react";
import { makeAutoObservable } from "mobx";
import { Resource } from "../models/types";
import { listResources, readResource } from "../api/routes";

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
      const response = await listResources();
      this.setResources(response.data.data);
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
