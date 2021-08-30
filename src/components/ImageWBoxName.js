import React from 'react'

function ImageWBoxName(props) {
    return (
      <div className="border-2 p-3">
        <div className={"nature"}></div>

        <div className="border-3 text-center rounded-lg -mt-6 bg-white border-2 border-gray-200">
          <p className="">{props.name3}</p>
          <p className="">{props.newposition}</p>
        </div>
      </div>
    );
}

export default ImageWBoxName
