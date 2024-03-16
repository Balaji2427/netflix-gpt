import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Background from "../images/background.jpg";

const GptSearch = () => {
  return (
    <div>
      <img src={Background} alt="background" className="fixed -z-10" />
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
