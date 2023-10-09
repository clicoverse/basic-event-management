import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-[#ae1ec7]"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </a>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative p-2 text-4xl">Our Upcoming,</span>
                  </span>{" "}
                  Award Winning <span className="text-[#ae1ec7]">Events</span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Prepare to immerse yourself in a world of fashion and
                  creativity at the upcoming ClicoVerse Photoshoot Events –
                  where every click tells a story, and every moment is a work of
                  art. Join us for an unforgettable journey into the world of
                  style and imagination!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5">
        {services?.map((service) => (
          <div key={service.id} className="max-w-screen-2xl px-5 mx-auto py-10">
            <div className="relative flex sm:flex-col w-full  lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src={service.image}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-start items-center gap-5">
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
                    Upcoming
                  </p>
                  <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-[#ff006a] antialiased">
                    {service.upcoming_date}
                  </h6>
                </div>
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {service.title}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  {service.description}
                </p>
                <h6 className="mb-4 block font-sans text-base font-normal uppercase leading-relaxed tracking-normal text-[#ff006a] antialiased">
                  {service.venue}
                </h6>
                <Link to={`./service/${service.id}`}>
                  <a className="inline-block">
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#ff006a] transition-all hover:bg-[#ae1ec7]/10 active:bg-[#ae1ec7]/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Know More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
