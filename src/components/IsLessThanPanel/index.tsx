import { FC } from "react";

export const IsLessThanPanel:FC = () => (
  <div className="flex flex-col flex-grow justify-center content-center">
    <svg
      className="mx-auto  stroke-indigo-500 fill-indigo-500 h-12 w-12 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="text-center mt-2 block text-2xl text-red-700 font-medium text-gray-900">
      {" "}
      O número é menor que seu palpite!{" "}
    </span>
  </div>
);
