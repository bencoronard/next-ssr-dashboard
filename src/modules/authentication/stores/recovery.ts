import React from "react";
import { makeAutoObservable } from "mobx";
import { recover } from "../api/routes";

class RecoveryContext {
  isLoading: boolean = false;

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  constructor() {
    makeAutoObservable(this);
  }

  recover = async (username: string) => {
    this.setIsLoading(true);
    try {
      await recover({ username });
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  };
}

export const recoveryContext = React.createContext(new RecoveryContext());
