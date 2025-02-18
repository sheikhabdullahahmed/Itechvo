import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 py-5 text-center text-sm text-gray-600">
            {/* Copyright */}
            <p className="text-xs md:text-sm lg:text-base">
                &copy; Copyright {currentYear}{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    FlexStart
                </a>{" "}
                All Rights Reserved
            </p>

            {/* Credit */}
            <p className="mt-2 text-xs sm:text-sm lg:text-base">
                Designed by{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    Ahmed & Abdullah
                </a>{" "}
                Distributed by{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    Bano Qabil
                </a>
            </p>
        </footer>
    );
};

export default Footer;
