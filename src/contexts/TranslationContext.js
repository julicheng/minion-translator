import React, { createContext, useState, useEffect } from "react";

export const TranslationContext = createContext();

const TranslationContextProvider = ({ children }) => {
  const images = [
    "booya",
    "hawaii",
    "journey",
    "laughing",
    "lunch",
    "micdrop",
    "starfish"
  ];
  const [image, setImage] = useState("");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

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

  useEffect(() => {
    setImage(images[Math.floor(Math.random() * images.length)]);
  });

  return (
    <TranslationContext.Provider
      value={{ image, translatedText, translateText, inputText, setInputText }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;
