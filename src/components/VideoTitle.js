const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black my-3 px-3 md:py-3 py-1 md:px-10 text-sm md:text-md rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-3 px-8 text-md bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
