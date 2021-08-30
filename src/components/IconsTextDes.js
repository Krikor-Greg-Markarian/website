import React from "react";

function IconsTextDes(props) {
  return (
    <div className="bg-white p-2">
      <div className={"villa"}></div>
      <p className="font-bold mt-2 text-center">{props.title}</p>
      <p className="mt-2 text-center">{props.description}</p>
    </div>
  );
}

export default IconsTextDes;
