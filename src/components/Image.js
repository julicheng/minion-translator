import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Image = () => {
  const { image } = useContext(TranslationContext);
  return (
    <img className="card-img-top minion-img" src={image} alt={image}></img>
  );
};

export default Image;
