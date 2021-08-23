import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import InputDesButton from "./components/InputDesButton";
import ImageText from "./components/ImageText";
import BoxesWithText from "./components/BoxesWithText";
import BoxesTogether from "./components/BoxesTogether";
import BkImgBut from "./components/BkImgBut";
import ImageWBoxName from "./components/ImageWBoxName";
import BoxBkTextButton from "./components/BoxBkTextButton";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div>
      <div className={"house-image"}>
        <p className="text-white font-bold p-2">Houzing</p>
        <li className="list-none float-right ">
          <a
            className="text-white font-bold p-3 hover:bg-black rounded-full transition duration-500 ease-in-out"
            href=""
          >
            HOME
          </a>
          <a
            className="text-white font-bold p-3 hover:bg-black rounded-full transition duration-500 ease-in-out"
            href=""
          >
            LISTING
          </a>
          <a
            className="text-white font-bold p-3 hover:bg-black rounded-full transition duration-500 ease-in-out"
            href=""
          >
            PROPERTY
          </a>
          <a
            className="text-white font-bold p-3 hover:bg-black rounded-full transition duration-500 ease-in-out"
            href=""
          >
            PAGES
          </a>
          <a
            className="text-white font-bold p-3 hover:bg-black rounded-full transition duration-500 ease-in-out"
            href=""
          >
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

            <section className="bg-gray-300 w-screen py-10">
              <h3 className="text-center font-bold">why choose us</h3>
              <p className="text-center">
                We provide full service at every step
              </p>

              <div className="grid grid-cols-4 p-2 gap-2 container mx-auto mt-8">
                <ImageText />
                <ImageText />
                <ImageText />
                <ImageText />
              </div>
            </section>
            <section className="bg-white">
              <p className="font-bold text-center mt-4">
                Explore Our Properties
              </p>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>

              <div className="flex justify-center items-center grid grid-cols-5 py-40 container mx-auto">
                <BoxesTogether name="House"/> 

                <BoxesTogether name="Apartment" />
                <BoxesTogether name="Office" />
                <BoxesTogether name="Villa" />
                <BoxesTogether name="Guitar" />
              </div>
            </section>
            <section>
              <BkImgBut />
              <div className="grid grid-cols-4 ml-12 mr-12 container mx-auto">
                <div className="p-4">
                  <p className="text-blue-900 font-bold">66.180</p>
                  <p>HOME FOR SALE</p>
                </div>
                <div className="p-4">
                  <p className="text-blue-900 font-bold">4.809</p>
                  <p>OPEN HOUSE</p>
                </div>
                <div className="p-4">
                  <p className="text-blue-900 font-bold">30.469</p>
                  <p>RECENTLY SOLD</p>
                </div>
                <div className="p-4">
                  <p className="text-blue-900 font-bold">2.919</p>
                  <p>PRICE REDUCED</p>
                </div>
              </div>
            </section>
            <section className="mt-20">
              <h3 className="text-center font-bold">
                Recent Properties For Rent
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className=" border-gray-200 grid grid-cols-4 px-2 py-4 gap-3 mt-10 container mx-auto">
                <ImageText />
                <ImageText />
                <ImageText />
                <ImageText />
              </div>
            </section>
            <section className="bg-gray-300 w-screen h-100 mt-6">
              <h3 className=" text-center font-bold py-4">Our Testimonials</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>

              <div className="grid grid-cols-4 p-2 gap-2 mt-8 container mx-auto">
                <BoxesWithText />
                <BoxesWithText />
                <BoxesWithText />
                <BoxesWithText />
              </div>
            </section>
            <div className="bg-white h-screen w-screen text-center mt-20">
              <p className="font-bold ">Explore Cities</p>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="grid grid-cols-4 gap-3 mt-36">
                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  1
                </div>
                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  2
                </div>
                <div className="w-60 h-60 bg-blue-600 flex justify-center items-center row-span-2 mt-3">
                  3
                </div>
                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center ml-24">
                  4
                </div>
                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  5
                </div>
                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  6
                </div>

                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center ml-24">
                  7
                </div>
              </div>
            </div>

            <section className="mt-20">
              <h3 className="text-center font-bold">Meet Our Agents</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className=" border-gray-200 grid grid-cols-5 px-2 py-4 gap-3 mt-10 container mx-auto">
                <ImageWBoxName name="Robert Fox" position="Lead Designer" />
                <ImageWBoxName name="Floyd CEO" position="Director" />
                <ImageWBoxName name="Albert Flores" position="Marketer" />
                <ImageWBoxName
                  name="Darlene Robertson"
                  position="Project Manager"
                />
                <ImageWBoxName
                  name="Savanash Nguyen"
                  position="Leader Developer"
                />
              </div>
            </section>

            <section className="bg-gray-100 w-screen h-screen">
              <h3 className="text-center font-bold py-4">From Our Blog</h3>
              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="grid grid-cols-4 p-2 gap-2 mt-12 container mx-auto">
                <BoxBkTextButton />
                <BoxBkTextButton />
                <BoxBkTextButton />
                <BoxBkTextButton />
              </div>
            </section>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
