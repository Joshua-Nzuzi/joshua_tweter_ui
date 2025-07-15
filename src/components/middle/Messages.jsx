/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiSettings, FiEdit2, FiSearch } from "react-icons/fi";

const messages = [
    {
        id: 1,
        userImage: "https://via.placeholder.com/50", // Replace with user image URL
        userName: "Jesus So Luv Dheena",
        userHandle: "@taladena",
        date: "Sep 11, 2019",
        preview: "ONLY FOR YOU Mohamed Ashik, accounts.youtu",
    },
];

function DirectMessages({ theme }) {
    const isLightTheme = theme === "light";

    const bgClass = isLightTheme ? "bg-white" : "bg-black";
    const textClass = isLightTheme ? "text-black" : "text-white";
    const borderColor = isLightTheme ? "border-gray-300" : "border-gray-700";
    const hoverBgClass = isLightTheme ? "hover:bg-gray-100" : "hover:bg-gray-800";
    const inputBgClass = isLightTheme ? "bg-white" : "bg-gray-900";
    const inputTextClass = isLightTheme ? "text-black" : "text-white";
    const iconClass = isLightTheme ? "text-black" : "text-white";

    return (
        <div className={`${bgClass} ${textClass} min-h-screen p-4`}>
            {/* Header */}
            <div className={`flex justify-between items-center border-b ${borderColor} pb-2`}>
                <h1 className="text-xl font-bold">Messages</h1>
                <div className="flex items-center gap-4">
                    <FiSettings className={`text-xl cursor-pointer hover:text-gray-400 ${iconClass}`} />
                    <FiEdit2 className={`text-xl cursor-pointer hover:text-gray-400 ${iconClass}`} />
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative mt-4">
                <FiSearch className={`absolute top-2.5 left-3 ${iconClass}`} />
                <input
                    type="text"
                    placeholder="Search Direct Messages"
                    className={`${inputBgClass} ${inputTextClass} w-full rounded-full pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
            </div>

            {/* Messages List */}
            <div className="mt-6">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-center gap-4 hover:bg-gray-800 p-4 rounded-lg transition duration-300 cursor-pointer ${hoverBgClass}`}
                    >
                        {/* User Image */}
                        <img
                            src={msg.userImage}
                            alt={msg.userName}
                            className="w-12 h-12 rounded-full"
                        />
                        {/* Message Content */}
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <span className="font-bold">{msg.userName}</span>
                                <span className="text-gray-500 text-sm">{msg.date}</span>
                            </div>
                            <div className="text-gray-400 text-sm">
                                <span className="font-bold">{msg.userHandle}</span> ·{" "}
                                {msg.preview}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DirectMessages;
