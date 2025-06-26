import React from 'react'

const DonationsCollection = () => {
  return (
    <ol className="relative border-s border-gray-700 ml-5">                  
      <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-emerald-600">
              <svg className="w-2.5 h-2.5 text-white/85" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
          </span>
          <div className="flex items-center justify-between">
            <div>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                    Flowbite Application UI v2.0.0 <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-emerald-600 text-white/85 ms-3">Latest</span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">Released on January 13th, 2022</time>
            </div>

            <h4 className="text-lg font-extrabold text-emerald-500 italic">7 ETH - $23,000</h4>
          </div>
      </li>
      <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-emerald-600">
              <svg className="w-2.5 h-2.5 text-white/85" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
          </span>
          <div className="flex items-center justify-between">
            <div>
                <h3 className="mb-1 text-lg font-semibold text-white">Flowbite Figma v1.3.0</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">Released on December 7th, 2021</time>
            </div>

            <h4 className="text-lg font-extrabold text-emerald-500 italic">4 ETH - $8,000</h4>
          </div>
      </li>
    </ol>
  )
}

export default DonationsCollection