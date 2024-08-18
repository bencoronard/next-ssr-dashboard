import { makeAutoObservable } from "mobx";
import React from "react";

class LoginContext {
  username: string;
  password: string;

  setUsername(username: string) {
    this.username = username;
  }
  setPassword(password: string) {
    this.password = password;
  }

  constructor() {
    this.username = "";
    this.password = "";
    makeAutoObservable(this);
  }

  async onLogin(username: string, password: string) {
    this.setUsername(username);
    this.setPassword(password);
  }

  showContext() {
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}

export const loginContext = React.createContext(new LoginContext());
