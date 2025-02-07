import React from "react";
import { makeAutoObservable } from "mobx";
import { createSession } from "../api/routes";
import { pauseExecution } from "@/modules/common/utilities/executionFlow";

class LoginContext {
  username: string = "";
  password: string = "";
  isLoading: boolean = false;

  setUsername(username: string) {
    this.username = username;
  }
  setPassword(password: string) {
    this.password = password;
  }
  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async login(username: string, password: string) {
    this.setIsLoading(true);
    try {
      // await createSession({ username, password });
      await pauseExecution(1000);
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  }
}

export const loginContext = React.createContext(new LoginContext());
