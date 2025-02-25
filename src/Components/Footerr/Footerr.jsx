import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 py-5 text-center text-sm text-gray-600">
            {/* Copyright */}
            <p className="text-xs md:text-sm lg:text-base">
                &copy; Copyright {currentYear}{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    itechvo
                </a>{" "}
                All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
