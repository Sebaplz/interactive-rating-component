import { useState } from "react";
import "./App.css";
import IconStar from "./components/icons/IconStar";
import "./components/Button.css";
import IlustrationThanksYou from "./components/icons/IlustrationThanksYou";

function App() {
  const [valor, setValor] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Button = ({ numero }) => {
    return (
      <>
        <button className="btn" onClick={() => setValor(numero)}>
          {numero}
        </button>
      </>
    );
  };

  function CardState({ setIsSubmitted, valor }) {
    return (
      <>
        <div className="container h-screen flex items-center justify-center">
          <article className="card rounded-3xl">
            <div className="imgSvg flex justify-center py-10">
              <IlustrationThanksYou />
            </div>
            <span className="span-select flex justify-center rounded-full sm:mx-16 2xl:mx-24 py-1">
              You selected {valor} out of 5
            </span>
            <div className="rounded-lg mx-6">
              <div className="py-4 text-center">
                <h1 className="font-bold text-white text-2xl mb-2">
                  Thank you!
                </h1>
                <p className="text-base text-center">
                  We appreciate you taking the time to give a rating. If you
                  ever need more support, don’t hesitate to get in touch!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="submit font-bold py-2 px-4 rounded-full h-9"
                >
                  Volver a Puntuar
                </button>
              </div>
            </div>
          </article>
        </div>
      </>
    );
  }

  return (
    <>
      {!isSubmitted && (
        <div className="container h-screen  flex items-center justify-center ">
          <article className="card rounded-3xl">
            <div className="rounded-lg mx-6">
              <button className="btn-star rounded-full mt-6 mb-4 cursor-default">
                <IconStar className="mx-3" />
              </button>
              <div className="py-4">
                <h1 className="font-bold text-white text-2xl mb-2">
                  How did we do?
                </h1>
                <p className="text-base">
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </div>
              <div className="flex justify-between pt-4 pb-6">
                <Button numero={1} />
                <Button numero={2} />
                <Button numero={3} />
                <Button numero={4} />
                <Button numero={5} />
              </div>
              <div className="flex justify-center pb-5 mb-5">
                <button
                  onClick={() => setIsSubmitted(true)}
                  className="submit font-bold py-2 px-4 rounded-full w-full h-14"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
      {isSubmitted && (
        <CardState setIsSubmitted={setIsSubmitted} valor={valor} />
      )}
    </>
  );
}

export default App;
