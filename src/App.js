import logo from "./logo.svg";
import "./App.css";
import InputDesButton from "./components/InputDesButton";
import ImageText from "./components/ImageText";
import BoxesWithText from "./components/BoxesWithText";
import BoxesTogether from "./components/BoxesTogether";
import BkImgBut from "./components/BkImgBut";
import ImageWBoxName from "./components/ImageWBoxName";
import BoxBkTextButton from "./components/BoxBkTextButton";
import IconsTextDes from "./components/IconsTextDes";
import BoxTextRI from "./components/BoxTextRI";
import Test from "./components/Test";
import Footer from "./components/Footer";

const obj = {
  data: [
    {
      title: "New",
      subtitle3: "Quincy St. Brooklyn NY, USA.",
      beds: "6 beds",
      baths: "5 baths",
      garage: "1 garage",
      meter: "1200 sq",
      oldprice: "$2800",
      newprice: "$ 7500 /mo",
    },
    {
      title: " Apartment",
      subtitle3: "Quincy St. Brooklyn NY, USA.",
      beds: "6 beds",
      baths: "5 baths",
      garage: "1 garage",
      meter: "1200 sq",
      oldprice: "$2800",
      newprice: "$ 7500 /mo",
    },
    {
      title: "Nice",
      subtitle3: "Quincy St. Brooklyn NY, USA.",
      beds: "6 beds",
      baths: "5 baths",
      garage: "1 garage",
      meter: "1200 sq",
      oldprice: "$2800",
      newprice: "$ 7500 /mo",
    },
    {
      title: "View",
      subtitle3: "Quincy St. Brooklyn NY, USA.",
      beds: "6 beds",
      baths: "5 baths",
      garage: "1 garage",
      meter: "1200 sq",
      oldprice: "$2800",
      newprice: "$ 7500 /mo",
    },
  ],
};

const object = {
  data: [
    {
      title: "Trusted By Thousands",
      description: "Lorem ipsum dolor, sit amet consecteur adipiscing elite.",
    },
    {
      title: "Trusted By Thousands",
      description: "Lorem ipsum dolor, sit amet consecteur adipiscing elite.",
    },
    {
      title: "Trusted By Thousands",
      description: "Lorem ipsum dolor, sit amet consecteur adipiscing elite.",
    },
    {
      title: "Trusted By Thousands",
      description: "Lorem ipsum dolor, sit amet consecteur adipiscing elite.",
    },
  ],
};

const object2 = {
  data: [
    {
      name: "House",
    },
    {
      name: "Apartment",
    },
    {
      name: "Office",
    },
    {
      name: "Villa",
    },
    {
      name: "Guitar",
    },
  ],
};

const object3 = {
  data: [
    {
      description2:
        "I belive in lifelong learning and skola is a great place to learn from experts. i've learned a lot and recommended it to all my friends.",
    },
    {
      description2:
        "I belive in lifelong learning and skola is a great place to learn from experts. i've learned a lot and recommended it to all my friends.",
    },
    {
      description2:
        "I belive in lifelong learning and skola is a great place to learn from experts. i've learned a lot and recommended it to all my friends.",
    },
    {
      description2:
        "I belive in lifelong learning and skola is a great place to learn from experts. i've learned a lot and recommended it to all my friends.",
    },
  ],
};

const object4 = {
  data: [
    {
      name3: "Robert Fox",
      newposition: "Lead Designer",
    },
    {
      name3: "Floyd CEO",
      newposition: "Director",
    },
    {
      name3: "Albert Flores",
      newposition: "Marketer",
    },
    {
      name3: "Darlene Robertson",
      newposition: "Project Manager",
    },
    {
      name3: "Savanash Nguyen",
      newposition: "Leader Developer",
    },
  ],
};

const object5 = {
  data: [
    {
      maintitle: "Redefine Ranks The Most Competetive",
      subtitle: "Neighborhoods of 2020",
      greytext: "Lorem Ipsum dodlor sit amet consectetur adipiscing elite.",
      readmore: "Read More",
    },
    {
      maintitle: "Redefine Ranks The Most Competetive",
      subtitle: "Neighborhoods of 2020",
      greytext: "Lorem Ipsum dodlor sit amet consectetur adipiscing elite.",
      readmore: "Read More",
    },
    {
      maintitle: "Redefine Ranks The Most Competetive",
      subtitle: "Neighborhoods of 2020",
      greytext: "Lorem Ipsum dodlor sit amet consectetur adipiscing elite.",
      readmore: "Read More",
    },
    {
      maintitle: "Redefine Ranks The Most Competetive",
      subtitle: "Neighborhoods of 2020",
      greytext: "Lorem Ipsum dodlor sit amet consectetur adipiscing elite.",
      readmore: "Read More",
    },
  ],
};

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
              {obj.data.map((item, idx) => (
                <ImageText
                  key={idx}
                  beds={item.beds}
                  baths={item.baths}
                  garage={item.garage}
                  meter={item.meter}
                  oldprice={item.oldprice}
                  newprice={item.newprice}
                  title3={item.title3}
                  subtitle3={item.subtitle3}
                />
              ))}
            </div>

            <section className="bg-gray-300 w-screen h-100 py-20">
              <h3 className="text-center font-bold py-2">why choose us</h3>
              <p className="text-center mt-2">
                We provide full service at every step
              </p>

              <div className="grid grid-cols-4 p-2 gap-2 container mx-auto mt-8">
                {object.data.map((item, idx) => (
                  <IconsTextDes
                    key={idx}
                    title={item.title}
                    description={item.description}
                  />
                ))}
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
                {object2.data.map((item, idx) => (
                  <BoxesTogether key={idx} name={item.name} />
                ))}
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
                {obj.data.map((item, idx) => (
                  <ImageText
                    key={idx}
                    beds={item.beds}
                    baths={item.baths}
                    garage={item.garage}
                    meter={item.meter}
                    oldprice={item.oldprice}
                    newprice={item.newprice}
                    title3={item.title}
                    subtitle3={item.subtitle3}
                  />
                ))}
              </div>
            </section>

            <section className="bg-gray-300 w-screen h-100 py-32 mt-6">
              <h3 className=" text-center font-bold ">Our Testimonials</h3>
              <p className="text-center mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>

              <div className="grid grid-cols-4 p-2 gap-2 mt-20 container mx-auto">
                {object3.data.map((item, idx) => (
                  <BoxTextRI key={idx} description2={item.description2} />
                ))}

                <div className="mt-12 font-bold">
                  Marvin McKinney
                  <div className="">Designer</div>
                </div>
                <div className="mt-12 font-bold">
                  Marvin McKinney
                  <div className="">Marketing Manager</div>
                </div>
                <div className="mt-12 font-bold">
                  Marvin McKinney
                  <div className="">CEO</div>
                </div>
                <div className="mt-12 font-bold">
                  Marvin McKinney
                  <div className="">Teacher</div>
                </div>
              </div>
            </section>

            <div className="bg-white h-screen w-screen text-center mt-20">
              <p className="font-bold ">Explore Cities</p>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="grid grid-cols-4 gap-3 mt-36">
                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  Los Angeles
                </div>

                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  New York
                </div>

                <div className="w-60 h-60 bg-blue-600 flex justify-center items-center row-span-2 mt-3">
                  Florida
                </div>

                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center ml-24">
                  Miami
                </div>

                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  London
                </div>

                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center">
                  Paris
                </div>

                <div className="w-32 h-32 bg-blue-600 flex justify-center items-center ml-24">
                  Istanbul
                </div>
              </div>
            </div>

            <section className="mt-20">
              <h3 className="text-center font-bold">Meet Our Agents</h3>
              <p className="text-center">
                {props.title2}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className=" border-gray-200 grid grid-cols-5 px-1 py-4 gap-3 mt-10 container mx-auto">
                {object4.data.map((item, idx) => (
                  <ImageWBoxName
                    key={idx}
                    name3={item.name3}
                    newposition={item.newposition}
                  />
                ))}
              </div>
            </section>

            <section className="bg-gray-100 w-screen h-screen">
              <h3 className="text-center font-bold py-4">From Our Blog</h3>
              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="grid grid-cols-4 p-2 gap-2 mt-12 container mx-auto">
                {object5.data.map((item, idx) => (
                  <BoxBkTextButton
                    maintitle={item.maintitle}
                    subtitle={item.subtitle}
                    greytext={item.greytext}
                    readmore={item.readmore}
                  />
                ))}
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
