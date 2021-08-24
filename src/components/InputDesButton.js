import React from 'react'

function InputDesButton() {
    return (
    
        <div className="grid grid-cols-5 border-2 border-gray-300 bg-white p-1 mt-8 flex">
          <div className="flex flex-col">
            <label className="text-black flex justify-center" htmlFor="">
              TYPE
            </label>
            <input
              className="border-2 text-center border-none focus: outline-none"
              placeholder="Property Types"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black flex justify-center" htmlFor="">
              LOCATION
            </label>
            <input
              className="border-2 border-none text-center focus: outline-none"
              placeholder="All Cities"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black flex justify-center" htmlFor="">
              SEARCH
            </label>
            <input
              className="border-2 border-none text-center focus: outline-none"
              placeholder="Enter Keywords"
              type="text"
            />
          </div>
          <div></div>

          <button className="bg-blue-700 text-white hover:bg-red-400">SEARCH</button>
        </div>
      
    );
}

export default InputDesButton
