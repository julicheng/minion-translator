import React, { createContext, useState, useEffect } from "react";
import {
  booya,
  hawaii,
  journey,
  laughing,
  lunch,
  micdrop,
  starfish
} from "../images/images";

export const TranslationContext = createContext();

const TranslationContextProvider = ({ children }) => {
  const images = [booya, hawaii, journey, laughing, lunch, micdrop, starfish];
  const [image, setImage] = useState("");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState(
    "Translation goes here!"
  );

  const changeImage = () => {
    setImage(images[Math.floor(Math.random() * images.length)]);
  };

  const translateText = async text => {
    try {
      const res = await fetch(
        `https://api.funtranslations.com/translate/minion.json?text=` + text
      );
      const data = await res.json();
      setTranslatedText(data.contents.translated);
    } catch (error) {
      console.log(error);
    }
  };

  // const translateText = async text => {
  //   const array = [1, 2, 3, 4, 5, 6];
  //   setTranslatedText(array[Math.floor(Math.random() * array.length)]);
  // };

  useEffect(() => {
    // setImage(images[Math.floor(Math.random() * images.length)]);
    return changeImage();
  }, [translatedText]);

  return (
    <TranslationContext.Provider
      value={{ image, translatedText, translateText, inputText, setInputText }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;
