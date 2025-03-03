import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="relative flex justify-center      pb-8 pt-18  lg:pb-20 lg:pt-[120px] ">
        <div className="container border-b border-gray-300 ">
          <div className=" flex flex-col md:flex-row lg:justify-center  ">
            <div className="w-full px-4 lg:py-0     sm:w-2/3 lg:w-3/12">
              <div className="lg:my-2 w-full">
                <a href="/#" className="mb-6 inline-block ">
                  <span className=" font-semibold text-2xl  text-[#A249F6]">itechvo</span>

                </a>
                <p className="mb-2   text-base ">
                  Karachi, Pakistan <br />
                </p>
                <p className="flex items-center mb-2 text-sm font-medium  ">
                  <span className="">
                  </span>
                  <span className="">Phone:+92 327-8244859</span>
                </p>

              </div>
              <p className="flex items-center mb-2 text-sm font-medium  ">
                <span className="     ">
                </span>
                <span className="">Email:itechvo236@gmail.com</span>
              </p>
            </div>


            <LinkGroup header="Useful Links"  >
              <NavLink link="/#" label="Home" />
              <NavLink link="/#" label="About us" />
              <NavLink link="/#" label="Services" />
              <NavLink link="/#" label="Terms of Service" />
            </LinkGroup>

            <LinkGroup header="Our Services" >
              <NavLink link="/#" label="Web Design" />
              <NavLink link="/#" label="Web Development" />
              <NavLink link="/#" label="Product Manage" />
              <NavLink link="/#" label="Marketing" />
            </LinkGroup>

            <div className="w-full   px-3 sm:w-1/2  lg:w-4/12">
              <div className="mb-10  w-full">
                <h4 className="mb-4 text-lg font-semibold text-[#A249F6] ">
                  Follow us on
                </h4>
                <p className="text-base  flex justify-center items-center  mb-6     ">
                  &copy; Creating a brand identity that resonates takes time and effort, but it’s worth it. When you align your brand with your audience’s .
                </p>
                <div className="mb-6 text-[#A249F6] hover:cursor-pointer      flex items-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=61568785406344"
                    className="mr-3 flex h-10 w-10 items-center justify-center hover:bg-[#CCACEB] hover:text-white rounded border-gray-300 border  sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/itechvo_?igsh=MWc0ZW1zcjlxbXQxNw=="
                    className="mr-3 flex h-10 w-10 items-center justify-center  hover:bg-[#CCACEB] hover:text-white rounded border border-gray-300    sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 28 28 "
                      className="fill-current"
                    >
                      <path d="M12 2.163c3.224 0 3.605.012 4.876.071 1.265.059 2.354.34 3.24 1.03.884.688 1.563 1.567 2.251 2.451.687.885 1.208 1.973 1.267 3.237.06 1.271.072 1.652.072 4.876s-.012 3.605-.071 4.876c-.059 1.264-.34 2.352-1.029 3.237-.688.884-1.567 1.563-2.451 2.251-.885.687-1.974 1.208-3.237 1.267-1.271.06-1.652.072-4.876.072s-3.605-.012-4.876-.071c-1.264-.059-2.352-.34-3.237-1.029-.884-.688-1.563-1.567-2.251-2.451-.687-.885-1.208-1.973-1.267-3.237-.06-1.271-.072-1.652-.072-4.876s.012-3.605.071-4.876c.059-1.264.34-2.352 1.029-3.237.688-.884 1.567-1.563 2.451-2.251.885-.687 1.974-1.208 3.237-1.267 1.271-.06 1.652-.072 4.876-.072zm0-2.163c-3.235 0-3.605.012-4.876.071-1.312.061-2.482.395-3.464 1.378-1.014.989-1.52 2.394-1.565 3.605-.06 1.271-.072 1.651-.072 4.873 0 3.223.012 3.603.071 4.876.062 1.221.554 2.616 1.567 3.605 1.025.983 2.258 1.317 3.464 1.378 1.271.06 1.651.071 4.876.071 3.223 0 3.603-.012 4.876-.071 1.221-.061 2.616-.395 3.605-1.378 1.01-.989 1.52-2.384 1.567-3.605.06-1.271.071-1.651.071-4.876 0-3.223-.012-3.603-.071-4.876-.062-1.221-.554-2.616-1.567-3.605-1.023-.983-2.394-1.317-3.605-1.378-1.271-.06-1.651-.071-4.876-.071zM12 5.838c-3.375 0-6.162 2.787-6.162 6.162s2.787 6.162 6.162 6.162 6.162-2.787 6.162-6.162-2.787-6.162-6.162-6.162zm0 10.281c-2.265 0-4.119-1.854-4.119-4.119s1.854-4.119 4.119-4.119 4.119 1.854 4.119 4.119-1.854 4.119-4.119 4.119zm5.905-7.369c-.688 0-1.247-.559-1.247-1.247 0-.688.559-1.247 1.247-1.247.688 0 1.247.559 1.247 1.247 0 .688-.559 1.247-1.247 1.247z" />
                    </svg>

                  </a>
                  <a
                    href="https://www.linkedin.com/company/itechvo-agency/"
                    className="mr-3 flex h-10 w-10 items-center justify-center  hover:bg-[#CCACEB] hover:text-white rounded border border-gray-300  sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12 ">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark ">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
