import React, { useState } from "react";

const servicesData = [
  {
    title: "Graphic Designing",
    description:
      "First impressions matter, make them unforgettable. Good design isn’t just about looking pretty; it’s about telling a story in a way that captures attention and builds trust. From eye-catching logos to stunning social media visuals, every design is crafted to leave a lasting impression.",
    details:
      "Designs are created to communicate effectively and connect with the audience, making every element purposeful and engaging.",
    icon: "💡",
    color: "#00bcd4",
  },
  {
    title: "Content Marketing",
    description:
      "Content isn’t just king, it’s the voice of a brand. In today’s fast-paced digital world, the right words can make people stop scrolling, start reading, and take action. High-quality, impactful content resonates with the audience and delivers results.",
    details:
      "Every piece of content is tailored to connect, build trust, and drive engagement that turns interest into outcomes.",
    icon: "📝",
    color: "#ff9800",
  },
  {
    title: "Website Designing",
    description:
      "A website isn’t just a page, it’s the face of a brand. A website is often the first place the audience connects with a business. It needs to impress, engage, and make them want to explore further. It serves as a digital handshake that sets the tone for the entire relationship.",
    details:
      "Modern, responsive, and user-friendly websites are designed to reflect a brand’s personality, enhance user experience, and achieve measurable business goals.",
    icon: "📺",
    color: "#4caf50",
  },
  {
    title: "Digital Marketing",
    description:
      "Being online isn’t enough, being visible is what counts. Digital marketing ensures the brand is present where it matters most, reaching the right audience at the right time with impactful strategies.",
    details:
      "From social media management to high-performance ad campaigns and SEO, strategies are implemented to increase visibility, attract traffic, and drive conversions.",
    icon: "💹",
    color: "#4caf50",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null); // Track the hovered service

  const handleReadMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div id="service ">
    <div  className="px-4 py-8 text-center">
      <h1 className="inline-block px-6 py-2 mx-auto mb-4 font-semibold text-purple-500 bg-gray-200 rounded-2xl">SERVICES</h1>
      <h2 className="mb-10 text-3xl font-semibold text-purple-900 md:text-4xl">Check Our Services</h2>

      <div className="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md flex flex-col justify-between h-full transform transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl hover:cursor-pointer"
            style={{
              borderBottom: `4px solid ${service.color}`,
              backgroundColor: hoveredService === index ? service.color : "", // Apply background color based on hover state
            }}
            onMouseEnter={() => setHoveredService(index)} // Set hover state for specific service
            onMouseLeave={() => setHoveredService(null)} // Remove hover state
          >
            <div
              className="mb-4 text-4xl"
              style={{
                color: service.color, // Set color of icon based on service color
              }}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-700 transition duration-300 ease-in-out hover:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 transition duration-300 ease-in-out hover:text-white">
              {service.description}
            </p>
            <button
              className="mt-4 font-semibold text-indigo-600 transition duration-200 transform hover:text-indigo-700"
              onClick={() => handleReadMore(service)}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-lg p-6 text-center bg-white shadow-lg rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-gray-800">{selectedService.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{selectedService.details}</p>
            <button
              className="px-6 py-2 mt-4 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Services;
