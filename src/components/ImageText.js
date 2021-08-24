import React from "react";

function ImageText() {
  return (
    <div className="border-2 px-4 py-2 bg-white">
      <img
        src="https://i.pinimg.com/474x/46/68/3f/46683f45a261e6ab571d48818e01c4e8.jpg"
        alt="villa"
      />
      <div className=" p-2 font-bold">New Apartment Nice View</div>
      <p className=" p-2 border-3 border-b">Quincy St. Brooklyn NY, USA.</p>
      <p className="inline-block">4 Beds</p>
      <p className="inline-block ml-3">5 Baths</p>
      <p className="inline-block ml-3">1 Garage</p>
      <p className="inline-block ml-2">1200 sq ft</p>
      <p className="line-through ml-2">$ 2,800</p>
      <p className="font-bold">$ 7500 /mo</p>
    </div>
  );
}

export default ImageText;
