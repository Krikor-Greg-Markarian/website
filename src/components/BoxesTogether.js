import React from "react";

function BoxesTogether(props) {
  return (
    <div className="bg-blue-500 w-32 h-32 flex justify-center items-center">
      {props.name}
    </div>
  );
}

export default BoxesTogether;
