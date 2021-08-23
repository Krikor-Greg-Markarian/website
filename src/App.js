import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputDesButton from "./components/InputDesButton";

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
        </div>
      </div>
    </div>
  );
}

export default App;
