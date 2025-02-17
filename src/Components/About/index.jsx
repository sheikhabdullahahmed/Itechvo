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
            <h2 className="mb-1 font-semibold text-purple-600">Who We Are</h2>
            <h2 className="text-2xl text-purple-900 lg:text-2xl font-semibold mb-4 md:w-4/5">
              Itechvo  is a marketing agency with a mission to grow business quickly and effectively with cutting-edge solutions customized to your needs.
            </h2>
            <p className="md:w-3/4 text-gray-600 text-base mb-4">
              Itechvo  is a marketing agency with a mission to grow business quickly and effectively with cutting-edge solutions customized to your needs. As a full-service marketing agency we specialize in providing creative and impactful services that drive results.
            </p>
            <button className="px-6 gap-1 md:mx-auto py-2 bg-[#A249F6] text-white hover:cursor-pointer font-bold rounded group transition-all duration-300 hover:bg-[#CCACEB] inline-flex items-center">
              Read More <FaArrowRight className='group-hover:ml-2 transition-all' />
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
