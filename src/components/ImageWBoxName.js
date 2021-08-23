import React from 'react'

function ImageWBoxName(props) {
    return (
      <div className="border-2 p-3">
        <div className={"nature"}></div>

        <div className="border-2 text-center rounded-lg -mt-6 bg-white">
          <p className="">{props.name}</p>
          <p className="">{props.position}</p>
        </div>
      </div>
    );
}

export default ImageWBoxName
