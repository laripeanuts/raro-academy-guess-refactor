import { FC } from "react";

export const WaitingPanel:FC = () => {
  return (
  <div className="flex flex-col flex-grow justify-center content-center">
    <span className="text-center mt-2 block text-2xl text-indigo-600 font-medium text-gray-900">
      {" "}
      Informe um número de 1 a 100 para iniciar o jogo{" "}
    </span>
  </div>
  )
};
