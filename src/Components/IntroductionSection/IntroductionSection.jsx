import "./Introduction.css";

const IntroductionSection = () => {
  const textStyles = {
    fontFamily: "Kaushan Script",
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-10 relative py-10 space-y-5">
      <p className="text-center text-xl text-[#ae1ec7]">
        Welcome to the Conference
      </p>
      <h2 style={textStyles}>Join The Innovators</h2>
      <p className=" text-justify px-5 lg:px-10 font-medium">
        ClicoVerse Digital Fashion Photoshoot Conference is a groundbreaking
        event that merges the worlds of fashion and technology, redefining the
        way we experience and engage with fashion photography. This innovative
        conference brings together leading photographers, fashion designers,
        digital artists, and technology enthusiasts to explore the endless
        possibilities of digital fashion photography. Attendees can expect a
        dynamic blend of workshops, panel discussions, and live photoshoot
        demonstrations that showcase cutting-edge techniques, from augmented
        reality-enhanced fashion shoots to virtual runway experiences.
        ClicoVerse Digital Fashion Photoshoot Conference is where creativity
        meets the digital age, inspiring a new era of fashion photography that
        blurs the lines between reality and imagination.
      </p>
    </div>
  );
};

export default IntroductionSection;
