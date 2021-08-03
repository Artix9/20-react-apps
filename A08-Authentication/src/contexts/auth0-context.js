import React, { createContext } from "react";

export const Auth0Context = createContext();

export function Auth0Provider({ children }) {
  return (
    <Auth0Context.Provider value={{ name: "cool guy" }}>
      {children}
    </Auth0Context.Provider>
  );
}
