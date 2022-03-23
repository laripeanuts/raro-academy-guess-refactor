import { FC } from "react";

export const GameOverPanel:FC = () => (
  <div className="flex flex-col flex-grow justify-center content-center">
    <svg
      className="mx-auto  stroke-red-500 fill-red-500 h-12 w-12 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="text-center mt-2 block text-2xl text-green-600 font-medium text-gray-900">
      {" "}
      Game Over{" "}
    </span>
  </div>
);
