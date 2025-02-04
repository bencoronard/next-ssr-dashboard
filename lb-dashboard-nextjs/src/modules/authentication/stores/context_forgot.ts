import React from "react";
import { makeAutoObservable } from "mobx";
import { recover } from "../api/route_authentication";

class ForgotContext {
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

  async forgot(username: string) {
    this.setIsLoading(true);
    try {
      await recover({ username: username });
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  }
}

export const forgotContext = React.createContext(new ForgotContext());
