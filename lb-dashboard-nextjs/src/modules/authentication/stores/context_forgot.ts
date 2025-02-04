import React from "react";
import { makeAutoObservable } from "mobx";

class ForgotContext {
  username: string = "";

  setUsername(username: string) {
    this.username = username;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async forgot(username: string) {
    this.setUsername(username);
  }

  showContext() {
    console.log(`Username: ${this.username}`);
  }
}

export const forgotContext = React.createContext(new ForgotContext());
