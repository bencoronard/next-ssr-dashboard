import React from "react";
import { makeAutoObservable } from "mobx";
import { createSession } from "../api/routes";
import { pauseExecution } from "@/modules/common/utilities/executionFlow";

class LoginContext {
  showPassword: boolean = false;
  isLoading: boolean = false;

  private setShowPassword = (showPassword: boolean) => {
    this.showPassword = showPassword;
  };
  private setIsLoading = (loading: boolean) => {
    this.isLoading = loading;
  };

  constructor() {
    makeAutoObservable(this);
  }

  togglePasswordVisibility = () => {
    this.setShowPassword(!this.showPassword);
  };

  login = async (username: string, password: string) => {
    this.setIsLoading(true);
    try {
      // await createSession({ username, password });
      await pauseExecution(1000);
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  };
}

export const loginContext = React.createContext(new LoginContext());
