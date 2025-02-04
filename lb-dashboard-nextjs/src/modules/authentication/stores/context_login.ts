import React from "react";
import { makeAutoObservable } from "mobx";
import { authenticate } from "../routes/route_login";

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
      await authenticate({ username, password });
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  }

  showContext() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}

export const loginContext = React.createContext(new LoginContext());
