import React from 'react'
import about from '../../assets/about.jpg'
import { FaArrowRight } from "react-icons/fa6";


function index() {
  return (
    <div>
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
  <div className="md:w-11/12 mx-auto flex flex-col lg:flex-row md:flex-col justify-between items-center  ">
    {/* Text Section */}
    <div className="md:w-4/5 lg:w-3/5 mx-auto bg-violet-50 p-7 ">
      <h2 className="mb-1 font-semibold text-blue-500">Who We Are</h2>
      <h2 className="text-2xl text-blue-900 lg:text-2xl font-semibold mb-4 md:w-4/5">
        Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.
      </h2>
      <p className="md:w-3/4 text-gray-600 text-base mb-4">
        Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
      </p>
      <button className="px-6 gap-1 md:mx-auto py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-600 transition-all duration-300 hover:translate-y-4 inline-flex items-center">
        Read More <FaArrowRight />
      </button>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-[55%] md:w-[80%]">
      <img src={about} alt="About Image" className="w-full h-auto" />
    </div>
  </div>
</div>



    </div>
  )
}

export default index
