import { useGlobalContext } from './context';
import Confetti from "react-confetti";
import questions from "./data";

const Modal = () => {
  const { closeModal, isModalOpen, score ,playAgain} = useGlobalContext();
  console.log(score);
  return (
    <>
      {isModalOpen && (
        <div className="absolute top-30 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]">
          {score > 0 && <Confetti />}
          <div className=" text-center bg-white p-8 mx-auto rounded-lg max-w-[600px] w-11/12">
            <h4 className="text-3xl pb-3 text-center font-bold">
              Your score is{" "}
              <span className={score > 0 ? "text-green-600" : "text-red-600"}>
                {score}%
              </span>
            </h4>
            <p className="py-2">
              You got {score}/{questions.length}
            </p>
            {(score > 0) && <p className="py-2 font-medium">Congrats!!!</p>}
            <button
              className="bg-yellow-600 py-2 px-7 rounded-xl text-white mt-2 hover:bg-yellow-500"
              onClick={()=>{
                playAgain();
                closeModal();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;