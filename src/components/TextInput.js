import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const TextInput = () => {
  const {
    changeImage,
    translateText,
    image,
    inputText,
    setInputText
  } = useContext(TranslationContext);
  return (
    <>
      <input
        type="text"
        placeholder="Type to translate..."
        onChange={evt => {
          setInputText(evt.target.value);
        }}
      ></input>
      <button onClick={() => translateText(inputText)}>Click</button>
    </>
  );
};

export default TextInput;
