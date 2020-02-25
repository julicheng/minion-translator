import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";
import {
  booya,
  hawaii,
  journey,
  laughing,
  lunch,
  micdrop,
  starfish
} from "../images/images";

const Image = () => {
  const { image } = useContext(TranslationContext);
  return (
    <div className="image-container">
      <img className="card-img-top minion-img" src={booya} alt={image}></img>
    </div>
  );
};

export default Image;
