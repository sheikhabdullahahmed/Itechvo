import React from "react";
import pic1 from "../../assets/pic1.png";
import { FaArrowRight } from "react-icons/fa6";
// import { CiVideoOn } from "react-icons/ci";
// import { MdOutlineAudiotrack } from "react-icons/md";
import hero from '../../assets/hero.png'
import { IoMdMusicalNotes } from "react-icons/io";

function Home() {

  
  return (
    <div id="home">
    <div
      className="bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="min-h-full ">
        <div className="  py-12 flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-8 px-6 ">
        <div>
  <img
    src={pic1}
    alt=""
    className="items-center w-full min-h-full lg:w-2/2 animate-up-down"
  />
</div>

<style jsx>{`
  @keyframes upDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0); 
    }
  }

  .animate-up-down {
    animation: upDown 4s ease-in-out infinite;
  }
`}</style>
          <div className="lg:w-1/2 md:w-4/6   w-3/3   ">
            <h1 className="text-3xl  md:text-5xl text-purple-900  lg:text-5xl font-semibold not-italic  ">
              Helping businesses grow with smart modern solutions.
            </h1>
            <p className=" text-gray-600 lg:text-lg text-lg md:text-base lg:my-4 mt-2 mb-5  ">
              We’re your marketing partner dedicated to making your business stand out and achieve success.
            </p>
            <a  href="#form">
            <button className="lg:text-base lg:px-6 lg:py-3 hover:cursor-pointer md:px-6 md:py-3 px-4 py-3 bg-[#A249F6] text-white font-base rounded hover:bg-[#CCACEB] inline-flex items-center gap-2 group">
              <span className="">Get Started</span>
              <FaArrowRight className="group-hover:ml-2 transition-all" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Home;
