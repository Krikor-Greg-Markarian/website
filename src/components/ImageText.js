import React from "react";

function ImageText(props) {
  return (
    <div className="border-2 px-4 py-2 bg-white">
      {/* <img
        src="https://i.pinimg.com/474x/46/68/3f/46683f45a261e6ab571d48818e01c4e8.jpg"
        alt="villa"
      /> */}
      <div className={"backgroundappartment"}></div>
      <div className=" p-2 font-bold">{props.title3}New Apartment, Nice View</div>
      <p className=" p-2 border-3 border-b">{props.subtitle3}Quincy St. Brooklyn NY, USA.</p>
      <p className="inline-block">{props.beds}</p>
      <p className="inline-block ml-3">{props.baths}</p>
      <p className="inline-block ml-3">{props.garage}</p>
      <p className="inline-block ml-2">{props.meter}</p>
      <p className="line-through ml-2">{props.oldprice}</p>
      <p className="font-bold">{props.newprice}</p>
    </div>
  );
}

export default ImageText;
