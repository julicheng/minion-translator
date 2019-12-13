import React from "react";
import Image from "./Image";
import Translation from "./Translation";
import TextInput from "./TextInput";
import TranslationContextProvider from "../contexts/TranslationContext";

const Content = () => {
  return (
    <TranslationContextProvider>
      <Image />
      <Translation />
      <TextInput />
    </TranslationContextProvider>
  );
};

export default Content;
