import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import IconStar from "./components/icons/IconStar";

function App() {
  return (
    <>
      <div className="container h-screen  flex items-center justify-center ">
        <article className="card rounded-3xl">
          <div className="rounded-lg shadow-lg mx-6">
            <button className="btn-star rounded-full mt-6 mb-4">
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
              <Button value="1" />
              <Button value="2" />
              <Button value="3" />
              <Button value="4" />
              <Button value="5" />
            </div>
            <div className="flex justify-center pb-5 mb-5">
              <button className="submit font-bold py-2 px-4 rounded-full w-full h-14">
                SUBMIT
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
