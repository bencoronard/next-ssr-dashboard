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
      await createResource({ field1, field2, field3 });
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
      await updateResource(id, { field1, field2, field3 });
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
      await deleteResource(id);
    } catch (error) {
      throw error;
    } finally {
      this.setLoadingDelete(false);
      this.setFocused(null);
    }
  };
}

export const resourceContext = React.createContext(new ResourceContext());
