/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaBell, FaExclamationTriangle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { TbX } from "react-icons/tb";

const notifications = [
    {
        icon: "🎉",
        title: "It's your X anniversary!",
        description: "Celebrate with a special post created just for you",
        type: "normal",
    },
    {
        icon: <FaBell className="text-blue-500" />,
        title: "Limited time offer – Upgrade to X Premium today and save 40%.",
        description:
            "It’s Premium’s 2nd birthday! Get access to Grok AI, ad-free timelines, blue checkmark, video downloads, reply boost, and much more. Expiring soon: Click here to claim offer",
        type: "offer",
    },
    {
        icon: <TbX className="text-white bg-black rounded-full" />,
        title: "There was a login to your account @joshuamaving from a new device on 24 Nov 2024.",
        description: "Review it now.",
        type: "login",
    },
    {
        icon: <FaExclamationTriangle className="text-red-500" />,
        title: "There was an attempt to log in to your account @joshuamavinga on 24 Nov 2024.",
        description: "That seems suspicious. Review it now.",
        type: "alert",
    },
];

function Notifications({ theme }) {
    const isLightTheme = theme === "light";

    const bgClass = isLightTheme ? "bg-white" : "bg-black";
    const textClass = isLightTheme ? "text-black" : "text-white";
    const borderColor = isLightTheme ? "border-gray-300" : "border-gray-700";
    const hoverBgClass = isLightTheme ? "hover:bg-gray-100" : "hover:bg-gray-800";
    const iconClass = isLightTheme ? "text-black" : "text-white";

    return (
        <div className={`${bgClass} ${textClass} min-h-screen p-4`}>
            {/* Header */}
            <div className={`flex justify-between items-center border-b ${borderColor} pb-2`}>
                <h1 className="text-xl font-bold">Notifications</h1>
                <FiSettings className={`text-xl cursor-pointer hover:text-gray-400 ${iconClass}`} />
            </div>

            {/* Tabs */}
            <div className={`flex border-b ${borderColor} mt-2`}>
                <button
                    className={`flex-1 text-center py-2 border-b-2 border-blue-500 font-semibold`}
                >
                    All
                </button>
                <button
                    className={`flex-1 text-center py-2 text-gray-500 hover:text-blue-500`}
                >
                    Verified
                </button>
                <button
                    className={`flex-1 text-center py-2 text-gray-500 hover:text-blue-500`}
                >
                    Mentions
                </button>
            </div>

            {/* Notification List */}
            <div className="mt-4">
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        className={`flex items-start p-4 ${hoverBgClass} transition duration-300 cursor-pointer border-b ${borderColor}`}
                    >
                        <div className="text-2xl mr-3">{notification.icon}</div>
                        <div>
                            <h3
                                className={`font-bold ${notification.type === "offer" ? "text-lg" : "text-base"}`}
                            >
                                {notification.title}
                            </h3>
                            <p className={`text-sm ${isLightTheme ? "text-gray-700" : "text-gray-500"}`}>
                                {notification.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notifications;
