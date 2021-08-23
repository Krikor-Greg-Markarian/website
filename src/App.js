import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputDesButton from "./components/InputDesButton";
import ImageText from "./components/ImageText";
import BoxesWithText from "./components/BoxesWithText";

function App() {
  return (
    <div>
      <div className={"house-image"}>
        <p className="text-white font-bold p-2">Houzing</p>
        <li className="list-none float-right ">
          <a className="text-white font-bold p-3" href="">
            HOME
          </a>
          <a className="text-white font-bold p-3" href="">
            LISTING
          </a>
          <a className="text-white font-bold p-3" href="">
            PROPERTY
          </a>
          <a className="text-white font-bold p-3" href="">
            PAGES
          </a>
          <a className="text-white font-bold p-3" href="">
            CONTACT
          </a>
          <a className="text-white font-bold p-3" href="">
            (+88 1990 6836)
          </a>
        </li>
        <br></br>
        <br></br>
        <div className="container mx-auto">
          <div className="font-bold text-white text-center">
            IT'S GREAT TO BE HOME
          </div>
          <p className="text-white text-2xl text-center font-bold">
            Find Your Perfect Home
          </p>
          <li className="list-none text-center mt-4">
            <a className="text-white font-bold p-4" href="#">
              BUY
            </a>
            <a className="text-white font-bold p-4 underline " href="#">
              RENT
            </a>
            <a className="text-white font-bold p-4" href="#">
              SOLD
            </a>
          </li>

          <InputDesButton />
          <section className="mt-20 container mx-auto">
            <h3 className="text-center font-bold">
              Discover Our Featured Listings
            </h3>
            <p className="text-center mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className=" border-gray-200 grid grid-cols-4 px-2 py-4 gap-3 mt-10">
              <ImageText />
              <ImageText />
              <ImageText />
              <ImageText />
            </div>

            <section className="bg-gray-300 w-screen h-96">
              <h3 className="text-center font-bold py-4">why choose us</h3>
              <p className="text-center ">
                We provide full service at every step
              </p>

              <div className="grid grid-cols-4 p-2 gap-2 container mx-auto">
                <BoxesWithText />
                <BoxesWithText />
                <BoxesWithText />
                <BoxesWithText />
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
