import React from 'react'
import { useState } from "react";
 
 function Textareaa () {

    const [text, setText] = useState("");

    // Handle change in textarea value
    const handleChange = (e) => {
      setText(e.target.value);
    };
  return (
    <div>
      <div className="flex items-center justify-center ">
      <div className="w-full  max-w-lg   ">
        
        <textarea
          id="message"
          className="w-full bg-white p-3 h-46 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Message"
          value={text}
          onChange={handleChange}
        />
      </div>
    </div>
      
    </div>
  )
}

export default Textareaa