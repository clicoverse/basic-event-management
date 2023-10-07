import videoBg from "../assets/video-bg.mp4";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-screen-2xl relative">
      <div className="bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full"></div>
      <video
        className="w-full h-2/5 object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div
        className="absolute top-20 md:top-56
       lg:top-1/2 left-9 flex flex-col justify-center items-start space-y-3 text-white"
      >
        <h2 className="text-3xl lg:text-6xl font-bold">
          <span className="text-[#ff006a]">ClicoVerse</span> Digital Fashion{" "}
          <br /> Photoshoot Conference
        </h2>
        <p className="text-md lg:text-2xl font-semibold">
          PrinceWell Hotel, Kolkata, India
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
