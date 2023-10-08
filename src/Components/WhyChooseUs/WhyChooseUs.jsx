const WhyChooseUs = () => {
  return (
    <div>
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
                Brand New
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
                      id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Discover</span>
              </span>{" "}
              What's Ahead
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              ClicoVerse Digital Fashion Photoshoot Conference is a cutting-edge
              event where fashion and technology converge, redefining fashion
              photography with innovative digital techniques and experiences.
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-1">
            <div className="duration-300 transform bg-white border-l-4 border-[#ae1ec7] hover:-translate-y-2">
              <div className="h-full p-5 space-y-3 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-4 pb-4 font-bold text-2xl leading-5">
                  Certified Speakers
                </h6>
                <p className="text-sm text-gray-900">
                  Certified speakers at the ClicoVerse Digital Fashion
                  Photoshoot Conference are industry experts, delivering
                  invaluable insights and expertise at the forefront of fashion
                  photography's digital evolution.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-[#ae1ec7] hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-4 pb-4 font-bold text-2xl leading-5">
                  Connecting People
                </h6>
                <p className="text-sm text-gray-900">
                  The ClicoVerse Digital Fashion Photoshoot Conference is a
                  powerful catalyst for connecting like-minded individuals,
                  enabling collaborations and networking opportunities in the
                  world of digital fashion photography.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-[#ae1ec7] hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-4 pb-4 font-bold text-2xl leading-5">
                  Unique Digital Ideas
                </h6>
                <p className="text-sm text-gray-900">
                  The ClicoVerse Digital Fashion Photoshoot Conference showcases
                  unique digital ideas that push the boundaries of fashion
                  photography, fostering innovation and creativity in the
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
