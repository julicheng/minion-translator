import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Translation = () => {
  const { translatedText, image, changeImage } = useContext(TranslationContext);
  return (
    <>
      <h2>
        {translatedText} {image}
      </h2>
      <button onClick={() => changeImage()}>click</button>
    </>
  );
};

export default Translation;
