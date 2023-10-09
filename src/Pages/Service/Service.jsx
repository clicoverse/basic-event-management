import { useLoaderData, useParams } from "react-router-dom";
import HeroSection from "../../Components/HeroSection";

const Service = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services?.find((service) => service.id == id);
  // console.log(service);
  return (
    <div>
      <HeroSection></HeroSection>
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto sm:text-center lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-[#ff006a]">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{" "}
                {service.title}
              </h2>
            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src={service.image}
                alt={service.title}
              />
            </div>
            <p className="max-w-xl mb-4 text-lg text-gray-700 sm:mx-auto">
              {service.description}
            </p>
            <div className="flex justify-around mt-3 item-center">
              <div className="flex justify-center items-center gap-5 mb-4 font-sans text-base font-normal uppercase leading-relaxed tracking-normal  antialiased">
                <h6 className="font-semibold text-lg">Date: </h6>
                <h6 className="text-xl font-bold text-[#ff006a]">
                  {service.upcoming_date}
                </h6>
              </div>
              <div className="flex justify-center items-center gap-5 mb-4 font-sans text-base font-normal uppercase leading-relaxed tracking-normal  antialiased">
                <h6 className="font-semibold text-lg">Price: </h6>
                <h1 className="text-xl font-bold text-[#ff006a]">
                  $ {service.price}{" "}
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 mb-4 font-sans text-base font-normal uppercase leading-relaxed tracking-normal  antialiased">
              <h6 className="font-semibold text-lg">Conference at: </h6>
              <h6 className="text-xl font-bold text-[#ff006a]">
                {service.venue}
              </h6>
            </div>
            <div className="flex justify-around mt-3 item-center">
              <button className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce">
                Buy Your Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
