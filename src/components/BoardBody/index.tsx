import { FC } from "react";

export const BoardBody:FC = ({children}) => (
  <div
    className="bg-white shadow-md rounded-md
      flex justify-between content-center">
    {children}
  </div>
);

