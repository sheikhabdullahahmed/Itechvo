// import React from "react";





//  const Footer = ({ header, children,link, label})
//   return (
//     <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
//             <div className="mb-10 w-full">
//               <a href="/#" className="mb-6 inline-block max-w-[160px]">
//                 <img
//                   src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
//                   alt="logo"
//                   className="max-w-full dark:hidden"
//                 />
//                 <img
//                   src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
//                   alt="logo"
//                   className="max-w-full hidden dark:block"
//                 />
//               </a>
//               <p className="mb-7 text-base text-body-color dark:text-dark-6">
//                 Sed ut perspiciatis undmnis is iste natus error sit amet
//                 voluptatem totam rem aperiam.
//               </p>
//               <p className="flex items-center text-sm font-medium text-dark dark:text-white">
//                 <span className="mr-3 text-primary">
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_941_15626)">
//                       <path
//                         d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
//                         fill="currentColor"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_941_15626">
//                         <rect width="20" height="20" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </span>
//                 <span>+012 (345) 678 99</span>
//               </p>
//             </div>
//           </div>

//           <LinkGroup header="Resources">
//             <NavLink link="/#" label="SaaS Development" />
//             <NavLink link="/#" label="Our Products" />
//             <NavLink link="/#" label="User Flow" />
//             <NavLink link="/#" label="User Strategy" />
//           </LinkGroup>

//           <LinkGroup header="Company">
//             <NavLink link="/#" label="About TailGrids" />
//             <NavLink link="/#" label="Contact & Support" />
//             <NavLink link="/#" label="Success History" />
//             <NavLink link="/#" label="Setting & Privacy" />
//           </LinkGroup>

//           <LinkGroup header="Quick Links">
//             <NavLink link="/#" label="Premium Support" />
//             <NavLink link="/#" label="Our Services" />
//             <NavLink link="/#" label="Know Our Team" />
//             <NavLink link="/#" label="Download App" />
//           </LinkGroup>

//           <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
//             <div className="mb-10 w-full">
//               <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
//                 Follow Us On
//               </h4>
//               <div className="mb-6 flex items-center">
//                 {/* Social Media Links (you should replace the href values with actual URLs) */}
//                 <a href="#" className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
//                   {/* Add actual icon content for each platform */}
//                   <svg width="8" height="16" viewBox="0 0 8 16" className="fill-current">
//                     <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.36393 0 7.13089 0C6.9774 0 6.85893 0.123293 6.85893 0.351397C6.85893 0.51232 6.86279 0.724377 6.86279 0.888522C6.86279 1.06304 6.85893 1.21841 6.85893 1.38423C6.85893 1.59663 6.72567 1.773 6.5305 1.773H4.44027C4.14542 1.773 4.02118 1.59065 4.02118 1.34819C4.02118 1.1144 4.14542 0.895607 4.44027 0.895607H6.5305C6.72567 0.895607 6.85893 0.719877 6.85893 0.471313C6.85893 0.354493 6.9774 0.230232 7.13089 0.230232C7.36393 0.230232 7.57186 0.469614 7.57186 0.711197V3.24527C7.57186 3.55925 7.3726 3.76774 7.43902 3.76774H7.07965C6.77702 3.76774 6.52956 4.01671 6.52956 4.32363V4.84969H6.18972C6.01372 4.84969 5.83957 4.73288 5.72239 4.54856L4.80003 3.30639H3.77482V4.82333L4.90793 5.89051C5.0489 6.04999 5.23993 6.15635 5.45681 6.15635C5.61448 6.15635 5.77321 6.10527 5.89616 5.98388C6.10506 5.81807 6.1333 5.49798 6.05665 5.20659L5.72239 4.54856C5.46091 4.15797 5.2266 4.4396 5.2266 4.71772V5.20659C5.2266 5.28323 5.16611 5.43885 5.03445 5.50276L5.22713 5.30334C5.17124 5.42515 5.01423 5.48942 4.86356 5.47872C4.70688 5.46269 4.54007 5.45785 4.36734 5.45657L4.44027 4.88979"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer bottom */}
//         <div className="pt-10 mt-10 text-center text-sm text-body-color dark:text-dark-6">
//           <p>
//             &copy; {new Date().getFullYear()} All Rights Reserved by Your Company.
//           </p>
//         </div>
//       </div>
//       <div className="w-full px-4 sm:w-1/3 lg:w-3/12">
//       <div className="mb-10 w-full">
//         <h4 className="mb-6 text-lg font-semibold text-dark dark:text-white">{header}</h4>
//         <div>{children}</div>
//       </div>
//     </div>
//     <a href={link} className="block text-base text-body-color dark:text-dark-6 hover:text-primary">
//       {label}
//     </a>
//     </footer>
//   );


// export default Footer

import React from 'react'

export default function index() {
  return (
    <div>
      index
    </div>
  )
}
