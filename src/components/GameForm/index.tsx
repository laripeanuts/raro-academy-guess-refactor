import React from "react";
import { FC } from "react";


interface IProps {
  guess: (number: number) => void,
  step: number,
  max: number,
};

export const GameForm:FC<IProps> = ({ guess, step, max }) => {
  const [number, setNumber] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setNumber(event.target.value);
  const handleGuess = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    guess(parseInt(number));
  };
  if (step > max) {
    return <></>;
  } else {
    return (
      <div className="bg-white shadow rounded-l-lg bg-indigo-50 ">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Qual é o seu palpite?
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              {step == 1 && `Tentativa ${step} de ${max}`}
              {step > 1 && `Tentativas ${step} de ${max}`}
            </p>
          </div>
          <form className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="guess" className="sr-only">
                Email
              </label>
              <input
                type="number"
                name="guess"
                id="guess"
                onChange={handleChange}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-10 bg-gray-100 text-center w-100"
                placeholder="Numero de 1 a 100"
              />
            </div>
            <button
              onClick={handleGuess}
              className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Adivinhar
            </button>
          </form>
        </div>
      </div>
    );
  }
};
