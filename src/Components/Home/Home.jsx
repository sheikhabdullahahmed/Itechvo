import React from "react";
import pic1 from "../../assets/pic1.png";
import { FaArrowRight } from "react-icons/fa6";
// import { CiVideoOn } from "react-icons/ci";
import { MdOutlineAudiotrack } from "react-icons/md";
import hero from '../../assets/hero.png'


function Home() {
  return (
   <div
  className="bg-cover bg-center bg-no-repeat "
  style={{ backgroundImage: `url(${hero})` }}
>
  <div className="min-h-screen  "> 
    <div className="  py-12 flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-12 px-6 ">
      <div>
        <img src={pic1} alt="" className="  items-center w-full min-h-full" />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-4xl md:text-5xl  text-blue-900 lg:text-5xl font-medium not-italic  ">
          We offer modern solutions for growing your business
        </h1>
        <p className=" text-gray-600 lg:text-xl text-xl my-5 ">
          We are a team of talented designers making websites with Bootstrap
        </p>
        <button className="px-8 py-3  bg-blue-600 text-white font-bold rounded hover:bg-blue-700  inline-flex items-center gap-2">
          Get Started <FaArrowRight  />
        </button>
        <button className="ml-4 py-2 font-bold inline-flex items-center gap-2 text-gray-600">
          < MdOutlineAudiotrack className="text-xl text-gray-600" /> Watch Video
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Home;
