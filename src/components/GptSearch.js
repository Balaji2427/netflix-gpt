import GptMovieSuggestions from "./GptMovieSuggestions";
import Background from "../images/background.jpg";
import GptSearchbar from "./GptSearchbar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-screen object-cover" src={Background} alt="logo" />
      </div>
      <div className="">
        <GptSearchbar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GptSearch;
