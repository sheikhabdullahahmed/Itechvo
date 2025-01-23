import React from "react"
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaUserClock } from "react-icons/fa6";


function index() {
    
const handleSubmit = (event) => {
    event.preventDefault();
  };
  
    return (
        <div className="">
          <div className="container mx-auto p-6">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Contact</h2>
    <p className="text-center text-gray-600 mb-8">Contact Us</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Address Card */}
        <div className="info-item aos-init aos-animate bg-white p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="fade" data-aos-delay="200">
            <IoLocationOutline className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">A108 Adam Street</p>
            <p className="text-gray-600">New York, NY 535022</p>
        </div>

        {/* Phone Card */}
        <div className="info-item aos-init aos-animate bg-white p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="fade" data-aos-delay="200">
            <FiPhoneCall className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+1 234 567 890</p>
        </div>

        {/* Email Card */}
        <div className="info-item aos-init aos-animate bg-white p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="fade" data-aos-delay="200">
            <MdOutlineMarkEmailUnread className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">contact@company.com</p>
        </div>

        {/* Opening Hours Card */}
        <div className="info-item aos-init aos-animate bg-white p-6 rounded-lg shadow-lg flex flex-col items-center" data-aos="fade" data-aos-delay="200">
            <FaUserClock className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Opening Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
            <p className="text-gray-600">Sat - Sun: Closed</p>
        </div>
    </div>

    {/* Contact Form */}
    {/* <ContactForm /> */}
</div>

        </div>
    )
}

export default index
