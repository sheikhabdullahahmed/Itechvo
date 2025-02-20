import React from 'react'

function index() {
  return (
    <div id='faqs'>
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <p className="text-center px-2 py-1  text-purple-500 w-32 mx-auto font-semibold rounded-2xl bg-gray-200 mb-4">F.A.Q </p>
            <h2 className="text-3xl md:text-4xl font-semibold   text-center  text-purple-900 mb-12">Frequently Asked Questions</h2>

          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="faq-item mb-4 group">
                <summary class="font-semibold py-2 px-4 cursor-pointer text-blue-900 transition-all duration-300 border-b border-gray-300">
                  1.What type of services do you offer?
                </summary>
                <span class="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                  itechvo offers a range of services starting from content writing, website development to any digital services. We provide solutions according to your needs. Explore our page and get started now!
                </span>
              </details>
              <details class="faq-item mb-4 group">
                <summary class="font-semibold py-2 px-4 cursor-pointer transition-all text-blue-900 duration-300 border-b border-gray-300">
                  2.How can I get started with itechvo?
                </summary>
                <span class="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                  Getting started is simple! Contact us through our website or social media platforms, and our team will schedule a consultation to understand your business needs.

                </span>
              </details>
              <details class="faq-item mb-4 group">
                <summary class="font-semibold py-2 px-4 cursor-pointer transition-all duration-300 text-blue-900 border-b border-gray-300">
                  3.Do you offer customized solutions?
                </summary>
                <span class="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                  Absolutely! All our solutions are tailored to meet the unique goals and challenges of your business.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="faq-item mb-4 group">
                <summary class="font-semibold py-2 px-4 cursor-pointer transition-all duration-300 border-b text-blue-900 border-gray-300">
                  4.How long to complete a project?
                </summary>
                <span class="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                  The timeline depends on the type and complexity of the project. We ensure timely delivery without compromising on quality. Feel free to discuss deadlines during the consultation.
                </span>
              </details>
              <details class="faq-item mb-4 group">
                <summary class="font-semibold py-2 px-4 cursor-pointer transition-all duration-300 border-b text-blue-900 border-gray-300">
                  5.What industries do you work with?
                </summary>
                <span class="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                  We work with businesses across various industries, including e-commerce, travel agency, technology, education, and more.
                </span>
              </details>
              <details class="faq-item mb-4 group">
                <summary class="font-semibold py-2 px-4 cursor-pointer transition-all duration-300 text-blue-900 border-b border-gray-300">
                  6.What makes your agency different?
                </summary>
                <span class="block px-4 py-2 transition-all duration-300 group-open:max-h-full group-open:opacity-100 group-open:block opacity-0 max-h-0 overflow-hidden">
                  Delivering a wide range of marketing services and providing result driven strategies is what makes us stand out from others. Our experienced and dedicated team mates not only help you master the subject but also guarantee long term commitment.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default index
