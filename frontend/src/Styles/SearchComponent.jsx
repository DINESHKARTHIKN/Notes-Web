import React from "react";

const SearchComponent = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute grid w-80 h-80 bg-grid bg-opacity-10 blur-sm -z-10" />
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-700 to-pink-500 rounded-lg blur-md opacity-40" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-black text-white w-72 h-14 pl-14 pr-12 text-lg rounded-lg outline-none placeholder-gray-400"
        />
        <div className="absolute left-4 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="text-gray-400"
          >
            <circle cx="11" cy="11" r="8" stroke="currentColor" />
            <line x1="16.65" y1="16.65" x2="22" y2="22" stroke="currentColor" />
          </svg>
        </div>
        <div className="absolute right-3 top-3 bg-gradient-to-b from-gray-800 to-black p-2 rounded-lg">
          <svg
            height="27"
            width="27"
            viewBox="4.8 4.56 14.832 15.408"
            fill="none"
            className="text-gray-300"
          >
            <path
              d="M8.16 6.65H15.83C16.47 6.65 16.99 7.17 16.99 7.81V9.09C16.99 9.56 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55 7 9.2V7.87C7 7.17 7.52 6.65 8.16 6.65Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
