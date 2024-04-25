import React, { createContext, useContext, ReactNode } from "react";

type Example = {
  x: string;
};

type MyContextProviderProps = {
  value: Example;
  children: ReactNode;
};

const Context = createContext<Example | undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ value, children }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useMyContext() {
  const example = useContext(Context);

  if (!example) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return example;
}
