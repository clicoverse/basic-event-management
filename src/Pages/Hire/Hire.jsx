import { useLoaderData } from "react-router-dom";

const Hire = () => {
  const hires = useLoaderData();
  // console.log(hires);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-5">
        {hires?.map((hire) => (
          <div key={hire.id}>
            <div className="relative flex mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src={hire.image}
                  // layout="fill"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {hire.name}
                </h5>
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased gap-5">
                  {" "}
                  Per Hour Charge:
                  <span> {hire.hourly_rate}</span>
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="border-none px-3 py-2 lg:px-5 lg:py-3 font-medium rounded-md bg-[#ff006a] text-white hover:bg-[#ae1ec7] cursor-pointer hover:animate-bounce"
                  type="button"
                  data-ripple-light="true"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hire;
