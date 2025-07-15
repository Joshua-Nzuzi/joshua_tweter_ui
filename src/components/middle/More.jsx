/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

function More({ theme, setTheme }) {
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    };

    return (
        <div className={`${theme == "dark" ? "bg-black text-white" : "bg-gray-100 text-black"} min-h-screen p-4`}>
            <h1 className="text-2xl font-bold mb-6">More</h1>
            <div className={`${theme == "dark" ? "bg-gray-800 text-white " : "bg-gray-200 text-black"} flex items-center justify-between p-4 rounded-lg shadow-md`}>
                <span className="text-lg font-medium">Theme</span>
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-full transition duration-300"
                >
                    {theme === "dark" ? (
                        <>
                            <BsSun className="text-yellow-400" />
                            Switch to Light Mode
                        </>
                    ) : (
                        <>
                            <BsMoon className="text-gray-300" />
                            Switch to Dark Mode
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

export default More;
