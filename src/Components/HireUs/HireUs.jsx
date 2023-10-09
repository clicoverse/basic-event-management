import { NavLink } from "react-router-dom";

const HireUs = () => {
  const textStyles = {
    fontFamily: "Kaushan Script",
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Like to</span>
            </span>{" "}
            <span style={textStyles}>Hire Us!!</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            ClicoVerse Fashion offers a curated selection of models for your
            photoshoot, ensuring a perfect blend of versatility and charm.
            Elevate your project with our top-notch models, each embodying the
            essence of style and professionalism.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/QnwW1wB/122.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/0QmMQ6L/834.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/Zh7Fd7H/345.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src="https://i.ibb.co/yq1B4Xj/545.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center sm:justify-center">
          <NavLink to={"/hire"}>
            <a
              href="/"
              className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce"
            >
              View Gallery
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
