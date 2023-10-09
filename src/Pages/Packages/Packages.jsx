import { NavLink } from "react-router-dom";

const Packages = () => {
  const textStyles = {
    fontFamily: "Kaushan Script",
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-5 py-5 lg:py-10 lg:px-10">
        <p className="text-center text-xl text-[#ae1ec7]">
          Welcome to the ClicoVerse Digital Fashion Photoshoot Conference
        </p>
        <h2 style={textStyles}>Get Your Tickets</h2>
        <h3 className="divider py-2 pb-6 text-center text-xl text-[#ae1ec7]">
          Photoshoot Conference at PrinceWell Hotel <br />
          on 10 October, 2023
        </h3>
        <p className=" text-center mx-5 lg:mx-10 px-5 lg:px-10 font-medium">
          Unlock the ClicoVerse and Elevate Your Style Game! 🚀 Join us for the
          Digital Fashion Photoshoot Conference and capture your fashion-forward
          future in pixels. Don't miss the ticket wave – secure your spot today
          and dive into the world of cutting-edge style. Let's click, pose, and
          conquer the ClicoVerse together! 📸
        </p>
      </div>
      <div className="grid gap-5 max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto sm:px-10 lg:px-10 py-10">
        <div className="p-4 w-80 bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800 mx-auto">
          <div className="flex items-center justify-between text-white">
            <p className="mb-4 text-3xl font-medium">Standard</p>
            <p className="flex flex-col text-3xl font-bold">
              $120
              <span className="text-sm font-thin text-right">1 Day</span>
            </p>
          </div>
          <p className="mt-4 text-white text-md">Plan include :</p>
          <ul className="w-full mt-6 mb-6 text-sm text-white space-y-5">
            <li className="mb-3 flex items-center text-lg">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Full Conference
            </li>
            <li className="mb-3 flex items-center opacity-50  text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                className="w-6 h-6 mr-2"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Meet Speaker
            </li>
            <li className="mb-3 flex items-center opacity-50  text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                className="w-6 h-6 mr-2"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Live Videos
            </li>
          </ul>
          <button
            type="button"
            className="w-full px-3 py-3 text-lg text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
          >
            Buy Ticket
          </button>
        </div>
        <div className="w-80 p-4 h-full bg-[#ae1ec7] shadow-lg rounded-2xl dark:bg-gray-800 mx-auto">
          <div className="flex items-center justify-between text-white">
            <p className="mb-4 text-3xl font-medium">Flexible</p>
            <p className="flex flex-col text-3xl font-bold">
              $270
              <span className="text-sm font-thin text-right">2 Days</span>
            </p>
          </div>
          <p className="mt-4 text-white text-md">Plan include :</p>
          <ul className="w-full mt-6 mb-6 text-sm text-white space-y-5">
            <li className="mb-3 flex items-center text-lg">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Full Conference
            </li>
            <li className="mb-3 flex items-center text-lg">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Live Videos
            </li>
            <li className="mb-3 flex items-center opacity-50  text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                className="w-6 h-6 mr-2"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Meet Speaker
            </li>
          </ul>
          <button
            type="button"
            className="w-full px-3 py-3 text-lg text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
          >
            Buy Ticket
          </button>
        </div>
        <div className="w-80 p-4 h-full bg-[#ff006a] shadow-lg rounded-2xl dark:bg-gray-800 mx-auto">
          <div className="flex items-center justify-between text-white">
            <p className="mb-4 text-3xl font-medium">Business</p>
            <p className="flex flex-col text-3xl font-bold">
              $340
              <span className="text-sm font-thin text-right">3 Days</span>
            </p>
          </div>
          <p className="mt-4 text-white text-md">Plan include :</p>
          <ul className="w-full mt-6 mb-6 text-sm text-white space-y-5">
            <li className="mb-3 flex items-center text-lg">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Full Conference
            </li>
            <li className="mb-3 flex items-center text-lg">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Live Videos
            </li>
            <li className="mb-3 flex items-center text-lg">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                stroke="currentColor"
                fill="white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              Meet Speaker
            </li>
          </ul>
          <button
            type="button"
            className="w-full px-3 py-3 text-lg text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
          >
            Buy Ticket
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-55 py-5 lg:py-10 lg:px-10">
        <div className="mx-24">
          <NavLink>
            <button
              type="button"
              className="py-2 px-4  bg-gradient-to-r from-[#ae1ec7] to-[#ff006a] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
            >
              Buy Upcomming Event Tickets
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Packages;
