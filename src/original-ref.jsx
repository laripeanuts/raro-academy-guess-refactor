
const BoardHeader = ({ restart, children, allowNewGame = false }) => (
  <div className="mb-8 md:flex md:items-center md:justify-between">
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
        Adivinhe o número:
      </h2>
    </div>
    <div className="mt-4 flex md:mt-0 md:ml-4">
      {allowNewGame && (
        <button
          type="button"
          onClick={() => restart()}
          className=" ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Novo Jogo{allowNewGame}
        </button>
      )}
    </div>
  </div>
);

const BoardBody = ({ children }) => (
  <div className="bg-white shadow-md rounded-md flex justify-between content-center">
    {children}
  </div>
);

const GameForm = ({ guess, step, max }) => {
  const [number, setNumber] = React.useState("");
  const handleChange = (event) => setNumber(event.target.value);
  const handleGuess = (event) => {
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

const WaitingPanel = () => (
  <div className="flex flex-col flex-grow justify-center content-center">
    <span className="text-center mt-2 block text-2xl text-indigo-600 font-medium text-gray-900">
      {" "}
      Informe um número de 1 a 100 para iniciar o jogo{" "}
    </span>
  </div>
);

const IsGreaterThanPanel = () => (
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
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="text-center mt-2 block text-2xl text-red-700 font-medium text-gray-900">
      {" "}
      O número é maior que seu palpite!{" "}
    </span>
  </div>
);

const IsLessThanPanel = () => (
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

const WonPanel = () => (
  <div className="flex flex-col flex-grow justify-center content-center">
    <svg
      className="mx-auto  stroke-green-500 h-12 w-12 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      ></path>
    </svg>
    <span className="text-center mt-2 block text-2xl text-green-600 font-medium text-gray-900">
      {" "}
      Você acertou o número sorteado com 1 tentativa!{" "}
    </span>
  </div>
);

const GameOverPanel = () => (
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

const Game = () => {
  const [gameState, setGameState] = React.useState(newGame(10));

  function newGame(tries) {
    return {
      status: "NEW_GAME",
      number: Math.floor(Math.random() * 100) + 1,
      remainingGuesses: tries,
      maxTries: tries,
    };
  }

  function restart() {
    setGameState(newGame(10));
  }

  const guess = (number) => {
    let remaining = gameState.remainingGuesses - 1;

    if (gameState.number == number && gameState.status != "GAME_OVER") {
      setGameState({
        ...gameState,
        status: "WON",
        remainingGuesses: remaining,
      });
    } else {
      if (remaining <= 0) {
        setGameState({
          ...gameState,
          status: "GAME_OVER",
          remainingGuesses: remaining,
        });
      } else {
        if (gameState.number > number) {
          setGameState({
            ...gameState,
            status: "IS_GREATER_THAN",
            remainingGuesses: remaining,
          });
        } else {
          setGameState({
            ...gameState,
            status: "IS_LESS_THAN",
            remainingGuesses: remaining,
          });
        }
      }
    }
  };

  const allowNewGame = () => gameState.status == "GAME_OVER";

  return (
    <div className="m-16">
      <BoardHeader restart={restart} allowNewGame={allowNewGame()} />
      <BoardBody>
        <GameForm
          guess={guess}
          step={gameState.maxTries - gameState.remainingGuesses + 1}
          max={gameState.maxTries}
        />
        {
          {
            WAITING: <WaitingPanel />,
            NEW_GAME: <WaitingPanel />,
            IS_GREATER_THAN: <IsGreaterThanPanel />,
            IS_LESS_THAN: <IsLessThanPanel />,
            WON: <WonPanel />,
            GAME_OVER: <GameOverPanel />,
          }[gameState.status]
        }
      </BoardBody>
    </div>
  );
};
