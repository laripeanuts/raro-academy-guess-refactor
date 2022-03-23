import {FC} from "react";

interface IProps {
  restart: () => void;
  allowNewGame: () => boolean;
}

export const BoardHeader:FC<IProps> = (props) => {
    console.log("aqui", props.allowNewGame())

    return (
        <div  className="mb-8 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
            Adivinhe o número:
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          {props.allowNewGame() && (
            <button
              type="button"
              onClick={() => props.restart()}
              className=" ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Novo Jogo
            </button>
          )}
        </div>
      </div>
    )
}