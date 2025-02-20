import React from 'react'
import {useRef} from "react"
import emailjs from '@emailjs/browser';



export default function Email() {


  
  const form = useRef();
  
  const sendEmail = (e) => {
      e.preventDefault();

    emailjs
      .sendForm('service_u9iuzpc', 'template_losy4cv', form.current, {
        publicKey: 'O_NqjS2jSzMzORSOA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
         <div className="lg:col-span-2 sm:col-span-2   w-full p-6  rounded-lg ">
        <form ref={form} onSubmit={sendEmail} className="w-full px-2 mx-auto max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full font-medium h-16 text-gray-700 border border-gray-300 py-3 px-4 leading-tight focus:ring-blue-500 focus:outline-none focus:ring-1 focus:border-gray-500 focus:bg-white"
            type="text"
            name="to_name"
            placeholder="Name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
        <input type="email" name="from_name" placeholder="Email" required />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input
            className="appearance-none block w-full font-medium h-16 text-gray-700 border border-gray-300 py-3 px-4 leading-tight focus:ring-blue-500 focus:outline-none focus:ring-1 focus:border-gray-500 focus:bg-white"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <textarea
            className="appearance-none block w-full font-medium h-32 text-gray-700 border border-gray-300 py-3 px-4 leading-tight focus:ring-blue-500 focus:outline-none focus:ring-1 focus:border-gray-500 focus:bg-white"
            name="message"
            placeholder="Your Message"
            required
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="w-56 mt-5 bg-blue-500 h-11 border rounded-lg font-medium text-white text-lg">
          Send Message
        </button>
      </div>
    </form>
            </div>

    </>
  )

}