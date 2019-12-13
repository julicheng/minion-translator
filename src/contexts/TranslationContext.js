import React, { createContext } from "react";

export const TranslationContext = createContext();

const TranslationContextProvider = ({ children }) => {
  return <TranslationContextProvider>{children}</TranslationContextProvider>;
};

export default TranslationContextProvider;
