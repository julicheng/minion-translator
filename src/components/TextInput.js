import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const TextInput = () => {
  const { translateText, inputText, setInputText } = useContext(
    TranslationContext
  );
  return (
    <>
      <input
        type="text"
        placeholder="Type to translate..."
        onChange={evt => {
          setInputText(evt.target.value);
        }}
      ></input>
      <button onClick={() => translateText(inputText)}>Translate!</button>
    </>
  );
};

export default TextInput;
