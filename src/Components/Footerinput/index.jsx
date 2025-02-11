import React from 'react'

function index() {
  return (
    <div>
 <div class="py-9 px-6    mx-auto bg-gray-100 border border-gray-200 h-full ">
  <h4 class="text-2xl font-semibold text-center text-blue-900 mb-4">Join Our Newsletter</h4>
  <p class="text-center text-gray-600 mb-6">Subscribe to our newsletter and receive the latest news about our products and services!</p>
  <div class="flex justify-center ">
    <input type="email" class="drop-shadow-xl  rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white    px-4 w-3xl "  />
    <button class="bg-blue-600 text-white  px-6 py-3   hover:bg-blue-600 transition-colors">Subscribe</button>
  </div>
</div>

    </div>
  )
}

export default index
