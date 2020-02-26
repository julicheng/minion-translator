import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Translation = () => {
  const { translatedText } = useContext(TranslationContext);
  return (
    <>
      <h2 className="translatedText">{translatedText}</h2>
    </>
  );
};

export default Translation;
