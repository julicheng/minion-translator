import React from "react";
import Image from "./Image";
import Translation from "./Translation";
import TextInput from "./TextInput";
import TranslationContextProvier from "../contexts/TranslationContext";

const Content = () => {
  return (
    <TranslationContextProvier>
      <Image />
      <Translation />
      <TextInput />
    </TranslationContextProvier>
  );
};

export default Content;
