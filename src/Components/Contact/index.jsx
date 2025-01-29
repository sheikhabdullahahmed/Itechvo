import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaUserClock } from 'react-icons/fa';
import Textareaa from '../../Textarea';

function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Contact</h2>
      <p className="text-center text-gray-600 mb-10">Contact Us</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        
        {/* Address Card */}
        <div className=" bg-white p-6 rounded-lg drop-shadow-md flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <IoLocationOutline className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">A108 Adam Street</p>
          <p className="text-gray-600">New York, NY 535022</p>
        </div>

        {/* Phone Card */}
        <div className="info-item aos-init aos-animate bg-white p-6 rounded-lg drop-shadow-md  flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <FiPhoneCall className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">+1 234 567 890</p>
        </div>
        </div>
        {/* Email Card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2'>
        <div className="info-item aos-init aos-animate bg-white p-6 rounded-lg drop-shadow-md  flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <MdOutlineMarkEmailUnread className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">contact@company.com</p>
        </div>

        {/* Opening Hours Card */}
        <div className="info-item aos-init aos-animate bg-white p-6 rounded-lg drop-shadow-md  flex flex-col items-center" data-aos="fade" data-aos-delay="200">
          <FaUserClock className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Opening Hours</h3>
          <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
          <p className="text-gray-600">Sat - Sun: Closed</p>
        </div>
        </div>
        {/* Form Section */}
        <div className="lg:col-span-2 sm:col-span-2   w-full p-6  rounded-lg ">
          <form className="w-full px-2 mx-auto max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                <input className="appearance-none block w-full  font-medium h-16 text-gray-700   focus:ring-blue-500 focus:outline-none focus:ring-1 border border-gray-300  focus:outline-none focus:ring-   py-3 px-4 leading-tight focus:border-gray-500 focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input className="appearance-none block w-full  font-medium   focus:ring-blue-500 focus:outline-none focus:ring-1  border border-gray-300  focus:outline-none focus:ring-  text-gray-700 py-3 h-16 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <input className="appearance-none block w-full  font-medium  focus:ring-blue-500 focus:outline-none focus:ring-1  border border-gray-300  focus:outline-none focus:ring- text-gray-700 h-16 py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Subject" />
              </div>
            </div>
            <Textareaa />
            <div className="flex justify-center">
              <button className="w-64 mt-5 bg-blue-500 h-11 border border-black rounded-xl font-bold text-white text-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Contact;
