import React from 'react'

function Footer() {
    return (
      <div className="bg-blue-700 text-white text-center h-80">
        <h3 className="font-bold">Become Real Estate Agent</h3>
        <p className="mb-5">
          We only work with the best companies arround the globe
        </p>
        <button className="mb-3 bg-white px-4 py-2 text-blue-600 rounded-lg font-bold">
          REGISTER NOW
        </button>
        <div className="grid grid-cols-4">
          <div className="bg-blue-900 h-96 list-none p-2">
            <li className="font-bold ">Contact us</li>
            <li className="mt-5">329 queeberry strret </li>
            <li className="mt-3">123 456 789 </li>
            <li className="mt-3">support@hotmail.com </li>
          </div>
          <div className="bg-blue-900 h-96 list-none p-2">
            <li className="font-bold">Company</li>
            <li className="mt-5">329 help center </li>
            <li className="mt-3">about </li>
            <li className="mt-3">careers </li>
            <li className="mt-3">how it works </li>
            <li className="mt-3">articles and tips </li>
            <li className="mt-3">term of services </li>
          </div>
          <div className="bg-blue-900 h-96 list-none p-2">
            <li className="font-bold">Discover </li>
            <li className="mt-5">Chicago </li>
            <li className="mt-3">Los Angeles </li>
            <li className="mt-3">Miami </li>
            <li className="mt-3">New York </li>
            <li className="mt-3">Florida </li>
            <li className="mt-3">Boston </li>
          </div>
          <div className="bg-blue-900 h-96 list-none p-2">
            <li className="font-bold">Newsletter</li>
            <p className="mt-5">we don't seed spam so dont worry.</p>
            <br></br>
            <div className="flex flex-row absolute">
              <input
                className="ml-10 px-12 py-2 rounded-lg"
                placeholder="Enter Your Email"
                type="text"
                name=""
                id=""
              />
              <button className="relative right-20 bg-red-600 rounded-lg border-2 p-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
