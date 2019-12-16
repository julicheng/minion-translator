import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Image = () => {
  const { image } = useContext(TranslationContext);
  return <img src="#" alt="#"></img>;
};

export default Image;
