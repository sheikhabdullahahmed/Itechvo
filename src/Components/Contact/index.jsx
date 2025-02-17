import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaUserClock } from 'react-icons/fa';
import Textareaa from '../../Textarea';

function Contact() {
  return (
    <div className="container   mx-auto p-6">
      <p className="text-center px-2 py-1  text-purple-500 hover:cursor-pointer w-32 mx-auto font-semibold rounded-2xl bg-gray-200 mb-4">Contact </p>
      <h2 className="text-2xl font-semibold   text-center  text-purple-900 mb-12">Contact Us</h2>

      <div className="grid  grid-cols-1 sm:grid-cols-2 hover:cursor-pointer lg:grid-cols-2 gap-6 mb-6">

        <div className=" bg-gray-100 p-6 drop-shadow-md flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <IoLocationOutline className="text-4xl text-[#CCACEB] mb-4" />
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Address</h3>
          <p className="text-gray-600">Karachi, Pakistan</p>
          {/* <p className="text-gray-600">New York, NY 535022</p> */}
        </div>

        {/* Phone Card */}
        <div className="info-item aos-init aos-animate bg-gray-100 p-6  drop-shadow-md  flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <FiPhoneCall className="text-4xl text-[#CCACEB]  mb-4" />
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Phone</h3>
          <p className="text-gray-600">+92 327-8244849</p>
          {/* <p className="text-gray-600">+1 6678 254445 41</p> */}
          
        </div>
      </div>
      {/* Email Card */}
      <div className='grid grid-cols-1 hover:cursor-pointer sm:grid-cols-2 gap-6 lg:grid-cols-2'>
        <div className="info-item aos-init aos-animate bg-gray-100 p-6 drop-shadow-md  flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <MdOutlineMarkEmailUnread className="text-4xl text-[#CCACEB] mb-4" />
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Email</h3>
          <p className="text-gray-600">info@example.com</p>
        </div>

        {/* Opening Hours Card */}
        <div className="info-item aos-init hover:cursor-pointer aos-animate bg-gray-100 p-6 drop-shadow-md  flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <FaUserClock className="text-4xl text-[#CCACEB] mb-4" />
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Opening Hours</h3>
          <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
          <p className="text-gray-600">Sat - Sun: Closed</p>
        </div>
      </div>
      {/* Form Section */}
      <div className="lg:col-span-2 sm:col-span-2    w-full p-6  rounded-lg ">
        <form className="w-full px-6 py-6 bg-gray-100  mx-auto max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
              <input className="appearance-none block w-full  bg-white font-medium h-16 text-gray-700   focus:ring-blue-500 focus:outline-none focus:ring-1 border border-gray-300  focus:outline-none focus:ring-   py-3 px-4 leading-tight focus:border-gray-500 focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input className="appearance-none block w-full  bg-white font-medium   focus:ring-blue-500 focus:outline-none focus:ring-1  border border-gray-300  focus:outline-none focus:ring-  text-gray-700 py-3 h-16 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input className="appearance-none block w-full bg-white  font-medium  focus:ring-blue-500 focus:outline-none focus:ring-1  border border-gray-300  focus:outline-none focus:ring- text-gray-700 h-16 py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Subject" />
            </div>
          </div>
          <Textareaa />
          <div className="flex justify-center">
            <button className="w-64 mt-5 bg-[#A249F6] hover:bg-[#CCACEB] h-11 rounded hover:cursor-pointer font-semibold text-white text-lg">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
