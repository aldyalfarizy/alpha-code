import React, { createContext, ReactNode, useState } from "react";

type MyContextProviderProps = {
  children: ReactNode;
};

type x = {
  globalState: string;
  updateGlobalState: (newValue: string) => void;
};

export const Context = createContext<x | undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState<string>("test");

  const updateGlobalState = (newValue: string) => {
    setGlobalState(newValue);
  };

  return <Context.Provider value={{ globalState, updateGlobalState }}>{children}</Context.Provider>;
};
