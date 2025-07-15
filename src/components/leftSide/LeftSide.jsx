/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars 
import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
    CiMail,
    CiHashtag,
    // CiBookmark,
    // CiViewList,
    CiUser,
    CiCircleMore,
} from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import userImage from "../../assets/user.png";

function LeftSide({ theme }) {
    // Base styles for NavLink
    const baseStyle =
        "p-2 flex items-center rounded-[1.5em] transition-all duration-300";
    const activeStyle = "text-[#1da1f2]";
    const inactiveStyle =
        `${theme == "dark" ? "text-white hover:bg-[#192734] hover:text-[#1da1f2] " : "text-black hover:text-[#1da1f2] hover:bg-gray-100"} w-auto`;

    // Define navigation links
    const navLinks = [
        { path: "/", label: "Home", icon: <IoHomeOutline /> },
        { path: "/explore", label: "Explore", icon: <CiHashtag /> },
        { path: "/notifications", label: "Notifications", icon: <IoIosNotificationsOutline /> },
        { path: "/messages", label: "Messages", icon: <CiMail /> },
        // { path: "/bookmarks", label: "Bookmarks", icon: <CiBookmark /> },
        // { path: "/lists", label: "Lists", icon: <CiViewList /> },
        { path: "/profile", label: "Profile", icon: <CiUser /> },
        { path: "/more", label: "More", icon: <CiCircleMore /> },
    ];

    return (
        <div className={`${theme == "dark" ? "bg-[#15202b] text-white " : "bg-gray-200 text-black"} min-h-[100vh] lg:pl-[3.3rem] p-4`} >
            <div className="lg:fixed">
                {/* Header */}
                <header className="mb-4 lg:mb-0">
                    <div className="px-2 py-1">
                        <FaTwitter className="hover:text-[#1da1f2] text-[1.9rem] my-[0.7rem] mx-auto lg:mx-0" />
                    </div>
                </header>

                {/* Navigation Links */}
                <nav className="cursor-pointer text-[1.1em] lg:text-[1.3em] font-medium space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                            }
                        >
                            <span className="mr-3">{link.icon}</span>
                            <span className="hidden sm:hidden md:hidden lg:inline">{link.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Tweet Button */}
                {/* <button className="hidden md:block lg:block xl:block 2xl:block bg-[#1da1f2] text-[#fff] rounded-[1.5rem] text-[0.9rem] lg:text-[1rem] mt-[1em] w-full lg:w-[14rem] cursor-pointer py-2 hover:bg-[#0f90e5]">
                    Tweet
                </button> */}

                {/* Footer with User Info */}
                <footer className="fixed bottom-4 left-2 right-2 lg:bottom-[1.5rem] lg:left-[4rem]">
                    <button className={`${theme == "dark" ? "text-white" : "text-black"} flex items-center text-[0.9rem] lg:text-[1rem]`}>
                        <div>
                            <img
                                src={userImage}
                                alt="user"
                                className="w-[2.5rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[50%]"
                            />
                        </div>
                        <div className="pl-3 hidden lg:block">
                            <div className="font-bold">Joshua Mavinga</div>
                            <div className={`${theme == "dark" ? "text-[#8899a6]" : "text-gray-500"} `}>@joshuamavinga</div>
                        </div>
                    </button>
                </footer>
            </div>
        </div >
    );
}

export default LeftSide;
