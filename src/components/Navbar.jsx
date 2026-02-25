import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            {/* ============================================
                OPTION 1: WHITE/LIGHT BACKGROUND (Clean & Modern)
                ============================================ */}
            <nav className="bg-[#F5BA78] text-black px-6 py-3 shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Urban Mix Concrete logo"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 font-semibold text-base items-center">
                        <li className="hover:text-[#B13F1A] transition-colors text-xl duration-300 cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-[#B13F1A] transition-colors text-xl duration-300 cursor-pointer">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="hover:text-[#B13F1A] transition-colors text-xl duration-300 cursor-pointer">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="hover:text-[#B13F1A] transition-colors text-xl duration-300 cursor-pointer">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="hover:text-[#B13F1A] transition-colors text-xl duration-300 cursor-pointer">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    {/* Enquiry Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-[#B13F1A] hover:bg-[#B33F18] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Enquiry
                        </button>
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-2xl text-gray-800"
                            onClick={() => setMobileMenu(!mobileMenu)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenu && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                        <ul className="flex flex-col gap-3 font-semibold text-base mt-4">
                            <li className="hover:text-orange-500 transition-colors py-2">
                                <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
                            </li>
                            <li className="hover:text-orange-500 transition-colors py-2">
                                <Link to="/about" onClick={() => setMobileMenu(false)}>About Us</Link>
                            </li>
                            <li className="hover:text-orange-500 transition-colors py-2">
                                <Link to="/products" onClick={() => setMobileMenu(false)}>Products</Link>
                            </li>
                            <li className="hover:text-orange-500 transition-colors py-2">
                                <Link to="/blog" onClick={() => setMobileMenu(false)}>Blog</Link>
                            </li>
                            <li className="hover:text-orange-500 transition-colors py-2">
                                <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* MODAL POPUP */}
            {open && (
                <div className="fixed inset-0 bg-black/60  flex justify-center items-center z-50 p-4">
                    <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl relative">
                        {/* Close Button */}
                        <button
                            className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-800 transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            ✖
                        </button>

                        {/* Header */}
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                            Enquiry Form
                        </h2>

                        {/* Form */}
                        <form className="space-y-4">
                            <input
                                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Name"
                                type="text"
                            />
                            <input
                                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Mobile"
                                type="tel"
                            />
                            <input
                                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Email"
                                type="email"
                            />
                            <input
                                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Product Name"
                                type="text"
                            />
                            <textarea
                                className="border border-gray-300 w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Message"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#B13F1A] hover:from-orange-600 hover:to-orange-700 text-white font-semibold w-full py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;