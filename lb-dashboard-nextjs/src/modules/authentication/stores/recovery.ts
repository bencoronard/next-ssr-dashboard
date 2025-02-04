import React from "react";
import { makeAutoObservable } from "mobx";
import { recover } from "../api/routes";

class RecoveryContext {
  username: string = "";
  isLoading: boolean = false;

  setUsername(username: string) {
    this.username = username;
  }
  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async recover(username: string) {
    this.setIsLoading(true);
    try {
      await recover({ username: username });
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  }
}

export const recoveryContext = React.createContext(new RecoveryContext());
