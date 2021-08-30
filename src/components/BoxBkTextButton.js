import React from "react";

function BoxBkTextButton(props) {
  return (
    <div className="bg-white p-2">
      <div className={"kitchen rounded-lg"}>
        <div className="absolut text-white bg-blue-900 rounded-lg text-center mr-12 ml-2">
          Button
        </div>
      </div>

      <p className="mt-3 text-center font-bold">
        {props.maintitle}
      </p>
      <p className="mt-4 text-center font-bold">{props.subtitle}</p>
      <p className="text-gray-500 mt-4 mb-3">
        {props.greytext}
      </p>
      <a className="text-blue-700 font-bold" href="#">
        {props.readmore}
      </a>
    </div>
  );
}

export default BoxBkTextButton;
